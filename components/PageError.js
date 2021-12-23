import Head from 'next/head';
import { useRouter } from 'next/router';
import Subtitle from './Subtitle';
import Button from './Button';

export default function PageError() {
  const router = useRouter();
  return (
    <div className="page-error">
      <Head>
        <link rel="shortcut icon" href="../favicon.png" />
        <title>Bardo colectivo</title>
      </Head>
      <img
        className="page-error__image"
        src="/logo-bardo.svg"
        alt="Bardo colectivo"
      />
      <Subtitle data="Ups, ocurrio algo inesperado, intenta nuevamente o regresa al inicio." />
      <br />
      <Button
        buttonstyle="button button--primary page-error__button"
        onclick={() => router.push('/')}
        text="Volver al inicio"
      />
    </div>
  );
}
