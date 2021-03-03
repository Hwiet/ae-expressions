/*
    Time remaps sections in a source comp enclosed within composition markers with durations.
    Markers may be placed in a different order than that of the source comp and may have a
    different duration than that of the source comp.

    What won't affect proper behavior
    - Markers with comments that don't exist in the source comp and markers without comments
      will be ignored.

    Restrictions
    - Comments of the layer marker must correspond to comp markers in the source composition.
    - You may see strange behavior with Motion Blur on.
*/

if (marker.numKeys == 0) value;
else {
    currMarker = null;
    targetSourceMarker = null;
    t = 0;
    n = marker.nearestKey(time).index;

    if (time < marker.key(n).time) --n;
    if (n == 0) n = 1;
    currMarker = marker.key(n);

    for (;;) {
        try {
            currMarker = marker.key(n);
            targetSourceMarker = source.marker.key(currMarker.comment);
            break;
        }
        catch (e) {
            if (currMarker.index == 1) {
                if (marker.numKeys == 1) {
                    n = -1;
                    break;
                }
                else {
                    for (i = 2; i < marker.numKeys; ++i) {
                        if (marker.key(i).comment != "") {
                            n = i;
                            break;
                        }
                    }
                    if (n == 1) n = -1;
                }
            }
            else --n;
        }
    }

    if (n != -1) {
        if (time < marker.key(1).time)
            targetSourceMarker.time;
        else if (time >= currMarker.time, time < currMarker.time + currMarker.duration) {
            linear(time, currMarker.time, currMarker.time + currMarker.duration,
                targetSourceMarker.time,
                targetSourceMarker.time + targetSourceMarker.duration);
        }
        else
            targetSourceMarker.time + targetSourceMarker.duration;
    }
    else value;
}