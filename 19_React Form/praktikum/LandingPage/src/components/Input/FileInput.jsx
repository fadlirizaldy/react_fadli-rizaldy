import ErrorInput from "../../elements/Form/ErrorInput";

const FileInput = ({ setFilePath, value, stateError }) => {
  return (
    <div className="d-flex flex-column mb-2">
      <label htmlFor="image-product" className="form-label">
        Image Product
      </label>
      <input
        type="file"
        value={value}
        onChange={({ target }) => setFilePath(target.value)}
        className={`form-control-file border rounded ${stateError.isError && !/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(value) ? "border-danger" : "border-primary"}`}
        style={{ width: "230px" }}
      />
      {stateError.isError && !/\.(gif|jpe?g|tiff?|png|webp|bmp)$/i.test(value) ? <ErrorInput id={"errorImage"} message={stateError.filepath} /> : ""}
    </div>
  );
};

export default FileInput;
