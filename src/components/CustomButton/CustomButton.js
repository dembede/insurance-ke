import { useNavigate } from "react-router-dom";
import { Button } from "./CustomButton.styled";

export default function CustomButton({ children, to, size }) {
  const navigate = useNavigate();

  return (
    <Button onClick={() => navigate(to)} size={size}>
      {children}
    </Button>
  );
}
