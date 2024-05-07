import "./ErrorPage.css";
import ErrorIcon from '@mui/icons-material/Error';

const ErrorPage = () => {
  return (
    <div className="container-error">
      <div id="ui-error">
        <div id="msg-error">
          <p>Esta não é a página da web que você está procurando</p>
          <h2>Error 404 <ErrorIcon /></h2>
          <a href="/">Volte para o começo</a>
        </div>
      </div>
      <div id="image-error" />
    </div>
  )
}

export default ErrorPage