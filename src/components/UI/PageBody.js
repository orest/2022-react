const PageBody = (props) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col ">
          <div className="p-3 bg-white">
            <h2 className="border-bottom pb-3">{props.pageTitle}</h2>
          </div>
          <div className="pt-2 p-3 bg-white">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default PageBody;
