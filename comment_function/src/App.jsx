import React from "react";
import { ProgressBarComponent } from "./Progressbar/ProgressBar";
import App1 from "./routerNew/App1";
import AppFile from "./file explore/AppFile";
import AppSearch from "./searchBar/AppSearch";
import AppPagenation from "./pagenation/AppPagenation";
import AppLazyLoading from "./LazyLoading/AppLazyLoading";
import AppOpt from "./opt/AppOpt";
import DynamicRoutingApp from "./DynamicRouting/DynamicRoutingApp";
import ToggleBtnApp from "./ToggleBtn/ToggleBtnApp";

function App() {
  return (
    <div>
      {/* <App1/> */}
      {/* <ProgressBarComponent/> */}
      {/* <AppFile/> */}
      <AppSearch />
      {/* <AppPagenation/> */}
      {/* <AppLazyLoading/> */}
      {/* <AppOpt/>  */}
      {/* <DynamicRoutingApp/> */}
      {/* <ToggleBtnApp /> */}
    </div>
  );
}

export default App;

// import React from "react";
// import CommentSection from "./CommentSection";

// function App() {
//   return (
//     <div className="p-4">
//       <h1 className="text-xl font-bold mb-4">Blog Post</h1>
//       <p>This is an example post.</p>
//       <CommentSection />
//     </div>
//   );
// }

// export default App;
