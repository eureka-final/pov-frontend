import { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Padded from '../../../../components/templates/Padded/Padded';
import { useTempPaymentMutation, usePaymentMutation } from '../../../../hooks/queries/usePaymentMutation';

function Index() {
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [searchParams] = useSearchParams();
  const paymentKey = searchParams.get('paymentKey');
  const orderId = searchParams.get('orderId');
  const amount = searchParams.get('amount');

  const tempPaymentMutation = useTempPaymentMutation();
  const paymentMutation = usePaymentMutation();

  const confirmTemp = () => {
    const requestData = {
      orderId,
      amount,
    };

    tempPaymentMutation.mutate(
      { ...requestData },
      {
        onSuccess: () => {
          console.log('DB에 저장 성공');
          confirmPayment();
        },
      }
    );
  };

  async function confirmPayment() {
    const requestData = {
      paymentKey,
      orderId,
      amount,
    };

    paymentMutation.mutate(
      { ...requestData },
      {
        onSuccess: () => {
          console.log('결제 성공');
          setIsConfirmed(true);
        },
      }
    );
  }

  return (
    <Padded>
      <div className="wrapper w-100">
        {isConfirmed ? (
          <div
            className="flex-column align-center confirm-success w-100 max-w-540"
            style={{
              display: 'flex',
            }}
          >
            <img src="https://static.toss.im/illusts/check-blue-spot-ending-frame.png" width="120" height="120" />
            <h2 className="title">결제를 완료했어요</h2>
            <div className="response-section w-100">
              <div className="flex justify-between">
                <span className="response-label">결제 금액</span>
                <span id="amount" className="response-text">
                  {amount}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="response-label">주문번호</span>
                <span id="orderId" className="response-text">
                  {orderId}
                </span>
              </div>
            </div>

            <div className="w-100 button-group">
              <div className="flex" style={{ gap: '16px' }}>
                <Link to={`/`} className="btn w-100">
                  홈으로 가기
                </Link>
                <Link to={`/mypage`} className="btn primary w-100">
                  응모 내역 보러가기
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex-column align-center confirm-loading w-100 max-w-540">
            <div className="flex-column align-center">
              <img src="https://static.toss.im/lotties/loading-spot-apng.png" width="120" height="120" />
              <h2 className="title text-center">결제 요청까지 성공했어요.</h2>
              <h4 className="text-center description">결제 승인하고 완료해보세요.</h4>
            </div>
            <div className="w-100">
              <button className="btn primary w-100" onClick={confirmTemp}>
                결제 승인하기
              </button>
            </div>
          </div>
        )}
      </div>
    </Padded>
  );
}

export default Index;
