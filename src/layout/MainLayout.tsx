import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup
} from '@/components/ui/resizable';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    const isMobile = false;

    return (
        <div className='flex flex-col h-screen text-white bg-black'>
            <ResizablePanelGroup
                direction='horizontal'
                className='flex flex-1 h-full p-2 overflow-hidden'
            >
                {/*Left Sidebar component */}
                <ResizablePanel
                    defaultSize={20}
                    minSize={isMobile ? 0 : 10}
                    maxSize={30}
                >
                    left sidebar
                </ResizablePanel>

                <ResizableHandle className='w-2 transition-colors bg-black rounded-lg' />

                {/* Main content */}
                <ResizablePanel defaultSize={isMobile ? 80 : 60}>
                    <Outlet />
                </ResizablePanel>

                <ResizableHandle className='w-2 transition-colors bg-black rounded-lg' />

                {/* right sidebar */}
                <ResizablePanel
                    defaultSize={20}
                    minSize={0}
                    maxSize={25}
                    collapsedSize={0}
                >
                    Friend activity
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
};

export default MainLayout;
