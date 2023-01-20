import "./Control.css";

export const Control = (props: {
  step: number;
  setStep: React.Dispatch<number>;
  setIsDark: React.Dispatch<boolean>;
}) => {
  const { step, setStep } = props;
  const setIsDark = props.setIsDark;

  return (
    <div className="control">
      <ul>
        <li
          onClick={() => {
            setStep(1);
          }}
        >
          <img src="/images/Lamp-1.png" alt="Lamp-1" />
        </li>
        <li
          onClick={() => {
            setStep(2);
          }}
        >
          <img src="/images/Lamp-2.png" alt="Lamp-2" />
        </li>
        <li
          onClick={() => {
            setStep(3);
          }}
        >
          <img src="/images/Lamp-3.png" alt="Lamp-3" />
        </li>
      </ul>
      <div className="day-night">
        <div
          className="button"
          onClick={() => {
            setIsDark(false);
          }}
        >
          <img src="/images/day.svg" alt="" />
        </div>
        <div
          className="button"
          onClick={() => {
            setIsDark(true);
          }}
        >
          <img src="/images/night.svg" alt="" />
        </div>
      </div>
    </div>
  );
};
