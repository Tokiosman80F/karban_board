import Done from "./Done";
import Progress from "./Progress";
import Todo from "./Todo";

export default function KarbanBoard() {
  return (
    <div className="flex-1 p-4 sm:p-6 lg:p-8 min-h-0">
      <div className="flex flex-col gap-6 xl:flex-row h-full">
        <Todo />

        <Progress />

        <Done />
      </div>
    </div>
  );
}
