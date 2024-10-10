// app/page.js
import Header from './components/Header';
import SignUpForm from './components/SignUpForm';

export default function Page() {
  return (
    <div className="container mt-5">
      <Header />
      <SignUpForm />
    </div>
  );
}
