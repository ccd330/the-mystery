import { useRouter } from 'next/navigation';

const EnterPage = () => {
  const router = useRouter();

  const handleEnterClick = () => {
    router.push('/');
  };

  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to The Mystery!</h1>
      <button onClick={handleEnterClick}>Enter Site</button>
    </div>
  );
};

export default EnterPage;
