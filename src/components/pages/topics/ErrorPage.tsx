import { useNavigate } from "react-router-dom";
import Button from "../../core/Button";

const ErrorPage: React.FC = () => {
  const navigate = useNavigate();

  return (
      <section className="page_404">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 ">
              <div className="col-sm-10 col-sm-offset-1  text-center">
                <div className="four_zero_four_bg">
                  <h1 className="text-center text-red-900">404</h1>
                </div>
                <div className="contant_box_404">
                  <h3 className="h2 text-red-900">Look like you're lost</h3>
                  <p className="text-red-900">
                    The page you are looking for not avaible!
                  </p>
                  <Button
                    children="Home"
                    onClick={() => navigate("/")}
                    variant="standard"
                    size="standard"
                    border={true}
                    backgroundColor="dark"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default ErrorPage;
