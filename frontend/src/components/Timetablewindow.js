import Timetable from './Timetable';
import { FixedSizeList as List } from 'react-window';
import { memo } from 'react';

function Timetablewindow({ createdCourses }) {
    return (
        <List
            height={1050}
            itemSize={520}
            itemCount={createdCourses.length}
            className="rounded shadow-lg"
        >
            {({ index, style }) => (
                <Timetable courses={createdCourses[index]} index={index} len={createdCourses[index].length} style={style} />
            )}
        </List>
    )
}

export default memo(Timetablewindow);