import { loadTossPayments, TossPaymentsInstance, PaymentWidgetsInstance } from '@tosspayments/tosspayments-sdk';
import { useEffect, useState } from 'react';
import Padded from '../../../components/templates/Padded/Padded';
import { v4 as uuidv4 } from 'uuid';
import './style.css';

interface Amount {
  currency: string;
  value: number;
}

const clientKey = import.meta.env.VITE_CLIENT_SECRET_KEY;
const customerKey = uuidv4();

function Index() {
  //@ts-ignore
  const [amount, setAmount] = useState<Amount>({
    currency: 'KRW',
    value: 50_000,
  });
  const [ready, setReady] = useState<boolean>(false);
  const [widgets, setWidgets] = useState<PaymentWidgetsInstance | null>(null);

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
      {/* 쿠폰 체크박스 */}
      {/* <div>
          <div>
            <label htmlFor="coupon-box">
              <input
                id="coupon-box"
                type="checkbox"
                aria-checked="true"
                disabled={!ready}
                onChange={(event) => {
                  // ------  주문서의 결제 금액이 변경되었을 경우 결제 금액 업데이트 ------
                  setAmount(event.target.checked ? amount - 5_000 : amount + 5_000);
                }}
              />
              <span>5,000원 쿠폰 적용</span>
            </label>
          </div>
        </div> 

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
              orderId: 'gcq1VyXgdwusIcTTZnQmq',
              orderName: '토스 티셔츠 외 2건',
              successUrl: window.location.origin + '/premieres/payments/success',
              failUrl: window.location.origin + '/premieres/payments/fail',
              customerEmail: 'customer123@gmail.com',
              customerName: '김토스',
              customerMobilePhone: '01012341234',
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
