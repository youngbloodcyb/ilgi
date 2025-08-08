import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import { Editor } from '@/components/editor';
import { DashSettings } from './dash-settings';
import { Input } from '@/components/ui/input';

export function Dashboard() {
  return (
    <div className="p-4 h-full w-full">
      <ResizablePanelGroup
        direction="horizontal"
        className="rounded-lg border h-full w-full"
      >
        <ResizablePanel defaultSize={75}>
          <div className="p-6 h-full w-full">
            <Editor />
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={25}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={75}>
              <div className="p-6 h-full w-full relative">
                <div className="absolute bottom-0 left-0 p-4 w-full">
                  <Input placeholder="make a change..." />
                </div>
              </div>
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25}>
              <DashSettings />
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  );
}
