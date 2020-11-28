export const home = (req, res) => res.render("home", { pageTitle: "Home" });          //render함수의 첫번째 인자는 템플릿이고, 두 번쨰 인자는 템플릿에 추가할 정보가 담긴 객체

export const search = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;                                                                            //이전에는 const serchingBy = req.query.term; 으로 했었음
  res.render("search", { pageTitle: "Search", searchingBy });
};

export const upload = (req, res) =>
  res.render("upload", { pageTitle: "Upload" });

export const videoDetail = (req, res) =>
  res.render("videoDetail", { pageTitle: "Video Detail" });

export const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });

export const deleteVideo = (req, res) =>
  res.render("deleteVideo", { pageTitle: "Delete Video" });