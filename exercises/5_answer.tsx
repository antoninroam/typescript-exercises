interface Success {
  type: `${string}Success`;
  body: string;
}

interface Error {
  type: `${string}Error`;
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
