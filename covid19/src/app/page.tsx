
import { redirect } from 'next/navigation';
export default function App() {

  const isAuthenticated = true; //replace this with actual logic
  
  if (isAuthenticated) {
    redirect('/home');
  }

  return (
    <div>Praveen</div>
  );
}
