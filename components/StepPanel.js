import React, { useState } from "react";
import { Button, Steps } from "antd";

const StepPanel = (props) => {
  const [current, setCurrent] = React.useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps
        current={current}
        className="justify-center items-center"
        labelPlacement="vertical"
      >
        {props.steps.map((item) => (
          <Steps.Step key={item.title} title={item.title} />
        ))}
      </Steps>
      {props.steps.map((item) => (
        <div
          className={`steps-content pt-10 ${
            item.step !== current + 1 && "hidden"
          }`}
        >
          {item.content}
        </div>
      ))}
      <div className="steps-action flex justify-center items-center mb-10">
        {current < props.steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === props.steps.length - 1 && (
          <>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </>
  );
};

export { StepPanel };
