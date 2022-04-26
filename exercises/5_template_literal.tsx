// Fix Typescript errors using template string types applied to `Success` and `Error` interfaces
// Try to make it generic, so any string is accepted, not only `Http` and `Backend` 
interface Success {
  type: "Success";
  body: string;
}

interface Error {
  type: "Error";
  message: string;
}

interface AccountPageProps {
  response: Success | Error;
}

export const AccountPage: React.FC<AccountPageProps> = ({ response }) => {

  const handleResponse = (response: Success | Error) => {
    if (response.type === "HttpError") {
      return "Please check your internet connection.";
    } else if (response.type === "BackendError") {
      return "Something went wrong on the server.";
    } else if (response.type === "Success") {
      return response.body;
    }
  }

  return (
    <div>
      <h1>Account</h1>
      <p>{handleResponse(response)}</p>
    </div>
  );
}
