import { useState } from "react";
import AddActivity from "./AddActivity";

const activityTypes = ["Mass", "Individual"];

export default function AnimatorPage() {
  const [selection, setSelection] = useState<
    "activity" | "emergency" | "equipment"
  >();

  return <AddActivity />;
}
