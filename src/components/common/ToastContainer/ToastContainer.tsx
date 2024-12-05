import { Toast } from 'pov-design-system';
import { useToastStore } from '../../../stores/useToastStore';

const ToastContainer = () => {
  const { toastList, removeToast } = useToastStore();

  return (
    <>
      {toastList.map(({ id, message, ...attributes }) => (
        <Toast key={id} onClose={() => removeToast(id)} {...attributes}>
          {message}
        </Toast>
      ))}
    </>
  );
};

export default ToastContainer;
