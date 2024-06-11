import FunctionContextComponent from "./FunctionContextComponent";
import { ThemeProvide } from "./ThemeContext";

export default function App() {
  return (
    <>
      <ThemeProvide>
        <FunctionContextComponent />
      </ThemeProvide>
    </>
  );
}
