import React from "react";
import MoodSelector from "../component/ui/loader";
import { useHandleMood } from "../hooks/use-handle-mood";

function withMoodSelector<P extends object>(Component: React.ComponentType<P>) {
  return (props: P) => {
    const { mood } = useHandleMood();

    if (mood === "false") {
      return <MoodSelector />;
    }

    return <Component {...props} />;
  };
}

export default withMoodSelector;
