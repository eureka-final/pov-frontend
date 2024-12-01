// import { useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Padded from '../../../../components/templates/Padded/Padded';

export default function Index() {
  const [searchParams] = useSearchParams();
  const errorCode = searchParams.get('code');
  const errorMessage = searchParams.get('message');
  //  const errorOrderId = searchParams.get('orderId');

  //   useEffect(() => {
  //     const updatePaymentState = async () => {
  //       // errorCode에 따라 payment_state 설정
  //       const newState = errorCode === 'ALREADY_PROCESSED_PAYMENT' ? 'success' : 'fail';

  //       // payment table에 payment_state 정보를 fail로 업데이트
  //       const { data, error } = await supabase.from('payment').update({ payment_state: newState }).eq('orderId', errorOrderId);

  //       if (error) {
  //         console.error('Error posting data:', error);
  //         return;
  //       }
  //     };

  //     updatePaymentState();
  //   }, [errorOrderId]); // errorOrderId가 변경될 때마다 실행

  return (
    <Padded>
      <div className="wrapper w-100">
        <div className="flex-column align-center w-100 max-w-540">
          <img src="https://static.toss.im/lotties/error-spot-apng.png" width="120" height="120" />
          <h2 className="title">결제를 실패했어요</h2>
          <div className="response-section w-100">
            <div className="flex justify-between">
              <span className="response-label">code</span>
              <span id="error-code" className="response-text">
                {errorCode}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="response-label">message</span>
              <span id="error-message" className="response-text">
                {errorMessage}
              </span>
            </div>
          </div>

          <div className="w-100 button-group">
            <Link to={`/premieres`} className="btn w-100">
              시사회 페이지로 가기
            </Link>
          </div>
        </div>
      </div>
    </Padded>
  );
}
