import Header from "./Header";
import MainSection from "./MainSection";
import Loader from "./Loader";
import Error from "./Error";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Progress from "./Progress";
import Finish from "./Finish";
import Footer from "./Footer";
import Timer from "./Timer";
import { useQuestion } from "../context/QuestionContext";

export default function App() {
  const { status } = useQuestion(); // Get status from context

  return (
    <div className="app">
      <Header />
      <MainSection>
        {(() => {
          switch (status) {
            case "loading":
              return <Loader />;
            case "error":
              return <Error />;
            case "ready":
              return <StartScreen />;
            case "active":
              return (
                <>
                  <Progress />
                  <Question />

                  <NextButton />
                  <Footer>
                    <Timer />
                  </Footer>
                </>
              );
            case "finish":
              return <Finish />;
            default:
              return null;
          }
        })()}
      </MainSection>
    </div>
  );
}
