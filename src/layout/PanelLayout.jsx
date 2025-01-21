import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import GridSheet from "../pages/grid/GridSheet";

const PanelLayout = () => {
  return (
    <div className="w-full h-screen py-4">
      <PanelGroup autoSaveId="example" direction="horizontal">
        <Panel collapsible={true} order={1}>
          <GridSheet />
        </Panel>
        <PanelResizeHandle />
        <Panel collapsible={true} order={2}>
          <div className="w-full h-screen flex items-center justify-center bg-white">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-500">V</div>
              <div className="text-gray-500">version 2.6.19</div>
            </div>
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default PanelLayout;
