import { FileControls, FormField } from "~/types/formField";
import RadioToggle from "../ContactMeFields/RadioToggle";
import SizeSelector from "../ContactMeFields/SizeSelector";
import TextArea from "../ContactMeFields/TextArea";
import DatePicker from "../ui/DatePicker";
import InputField from "~/components/ui/InputField/InputField";
import FileUploadField from "../ui/FileUploadField/FileUploadField";

const FULL_WIDTH_IDS = new Set([
  "needFrame",
  "needMat",
  "size",
  "photos",
  "message",
]);

export function renderField(
  field: FormField,
  hasFrame: boolean,
  setHasFrame: (value: boolean) => void,
  fileControls: FileControls,
  resetCount: number,
) {
  const { input } = field;
  const { selectedFiles, handleDelete, handleFileChange, fileSizeError } =
    fileControls;

  if (input.id === "needMat" && !hasFrame) {
    return null;
  }

  if (input.id === "width" || input.id === "height") {
    return null;
  }

  let fieldNode;

  switch (input.id) {
    case "size":
      fieldNode = <SizeSelector {...field} key={`size-${resetCount}`} />;
      break;
    case "deadline":
      fieldNode = (
        <DatePicker
          {...field}
          subLabel="Shipping takes 2-3 weeks"
          key={`date-${resetCount}`}
        />
      );
      break;
    case "needFrame":
      fieldNode = (
        <RadioToggle
          {...field}
          key={`frame-${resetCount}`}
          onChange={(val) => setHasFrame(val === "Yes")}
        />
      );
      break;
    case "needMat":
      fieldNode = <RadioToggle {...field} key={`mat-${resetCount}`} />;
      break;
    case "message":
      fieldNode = <TextArea {...field} />;
      break;
    case "photos":
      fieldNode = (
        <FileUploadField
          {...field}
          selectedFiles={selectedFiles}
          handleDelete={handleDelete}
          handleFileChange={handleFileChange}
          fileSizeError={fileSizeError}
        />
      );
      break;
    default:
      fieldNode = <InputField {...field} />;
  }

  return (
    <div
      key={input.id}
      className={FULL_WIDTH_IDS.has(input.id) ? "md:col-span-2" : ""}
    >
      {fieldNode}
    </div>
  );
}
