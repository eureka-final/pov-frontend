import { loadTossPayments, TossPaymentsInstance, PaymentWidgetsInstance } from '@tosspayments/tosspayments-sdk';
import { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import Padded from '../../../components/templates/Padded/Padded';
import { v4 as uuidv4 } from 'uuid';
import './style.css';
import { useAuthStore } from '../../../stores/useAuthStore';

interface Amount {
  currency: string;
  value: number;
}

const clientKey = import.meta.env.VITE_CLIENT_SECRET_KEY;
const customerKey = uuidv4();

function Index() {
  const amount: Amount = useMemo(
    () => ({
      currency: 'KRW',
      value: 50_000,
    }),
    []
  );

  const [ready, setReady] = useState<boolean>(false);
  const [widgets, setWidgets] = useState<PaymentWidgetsInstance | null>(null);

  const { premiereId } = useParams<{ premiereId: string }>();
  const { orderId } = useParams<{ orderId: string }>();
  const user = useAuthStore((state) => state.user);

  useEffect(() => {
    async function fetchPaymentWidgets() {
      // ------  결제위젯 초기화 ------
      const tossPayments: TossPaymentsInstance = await loadTossPayments(clientKey);
      // 회원 결제
      const widgets = tossPayments.widgets({
        customerKey,
      });
      setWidgets(widgets);
    }

    fetchPaymentWidgets();
  }, []);

  useEffect(() => {
    async function renderPaymentWidgets() {
      if (!widgets) {
        return;
      }
      // ------ 주문의 결제 금액 설정 ------
      await widgets.setAmount(amount);

      await Promise.all([
        // ------  결제 UI 렌더링 ------
        widgets.renderPaymentMethods({
          selector: '#payment-method',
          variantKey: 'DEFAULT',
        }),
        // ------  이용약관 UI 렌더링 ------
        widgets.renderAgreement({
          selector: '#agreement',
          variantKey: 'AGREEMENT',
        }),
      ]);

      setReady(true);
    }

    renderPaymentWidgets();
  }, [widgets]);

  useEffect(() => {
    if (!widgets) {
      return;
    }

    widgets.setAmount(amount);
  }, [widgets, amount]);

  return (
    <Padded>
      {/* 결제 UI */}
      <div id="payment-method" />
      {/* 이용약관 UI */}
      <div id="agreement" />

      {/* 결제하기 버튼 */}
      <button
        className="btn primary w-100"
        disabled={!ready}
        onClick={async () => {
          try {
            // ------ '결제하기' 버튼 누르면 결제창 띄우기 ------
            // 결제를 요청하기 전에 orderId, amount를 서버에 저장하세요.
            // 결제 과정에서 악의적으로 결제 금액이 바뀌는 것을 확인하는 용도입니다.
            await widgets?.requestPayment({
              orderId: orderId!,
              orderName: '시사회 응모 결제건',
              successUrl: window.location.origin + `/premieres/${premiereId}/payments/success`,
              failUrl: window.location.origin + `/premieres/${premiereId}/payments/fail`,
              customerEmail: user?.email,
              customerName: user?.nickname,
            });
          } catch (error) {
            // 에러 처리하기
            console.error(error);
          }
        }}
      >
        결제하기
      </button>
    </Padded>
  );
}
export default Index;
