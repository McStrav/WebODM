Potree.workers.lasdecoder = new Potree.WorkerManager(atob("CgovL3ZhciBwb2ludEZvcm1hdFJlYWRlcnMgPSB7Ci8vCTA6IGZ1bmN0aW9uKGR2KSB7Ci8vCQlyZXR1cm4gewovLwkJCSJwb3NpdGlvbiI6IFsgZHYuZ2V0SW50MzIoMCwgdHJ1ZSksIGR2LmdldEludDMyKDQsIHRydWUpLCBkdi5nZXRJbnQzMig4LCB0cnVlKV0sCi8vCQkJImludGVuc2l0eSI6IGR2LmdldFVpbnQxNigxMiwgdHJ1ZSksCi8vCQkJImNsYXNzaWZpY2F0aW9uIjogZHYuZ2V0VWludDgoMTYsIHRydWUpCi8vCQl9OwovLwl9LAovLwkxOiBmdW5jdGlvbihkdikgewovLwkJcmV0dXJuIHsKLy8JCQkicG9zaXRpb24iOiBbIGR2LmdldEludDMyKDAsIHRydWUpLCBkdi5nZXRJbnQzMig0LCB0cnVlKSwgZHYuZ2V0SW50MzIoOCwgdHJ1ZSldLAovLwkJCSJpbnRlbnNpdHkiOiBkdi5nZXRVaW50MTYoMTIsIHRydWUpLAovLwkJCSJjbGFzc2lmaWNhdGlvbiI6IGR2LmdldFVpbnQ4KDE2LCB0cnVlKQovLwkJfTsKLy8JfSwKLy8JMjogZnVuY3Rpb24oZHYpIHsKLy8JCXJldHVybiB7Ci8vCQkJInBvc2l0aW9uIjogWyBkdi5nZXRJbnQzMigwLCB0cnVlKSwgZHYuZ2V0SW50MzIoNCwgdHJ1ZSksIGR2LmdldEludDMyKDgsIHRydWUpXSwKLy8JCQkiaW50ZW5zaXR5IjogZHYuZ2V0VWludDE2KDEyLCB0cnVlKSwKLy8JCQkiY2xhc3NpZmljYXRpb24iOiBkdi5nZXRVaW50OCgxNiwgdHJ1ZSksCi8vCQkJImNvbG9yIjogW2R2LmdldFVpbnQxNigyMCwgdHJ1ZSksIGR2LmdldFVpbnQxNigyMiwgdHJ1ZSksIGR2LmdldFVpbnQxNigyNCwgdHJ1ZSldCi8vCQl9OwovLwl9LAovLwkzOiBmdW5jdGlvbihkdikgewovLwkJcmV0dXJuIHsKLy8JCQkicG9zaXRpb24iOiBbIGR2LmdldEludDMyKDAsIHRydWUpLCBkdi5nZXRJbnQzMig0LCB0cnVlKSwgZHYuZ2V0SW50MzIoOCwgdHJ1ZSldLAovLwkJCSJpbnRlbnNpdHkiOiBkdi5nZXRVaW50MTYoMTIsIHRydWUpLAovLwkJCSJjbGFzc2lmaWNhdGlvbiI6IGR2LmdldFVpbnQ4KDE2LCB0cnVlKSwKLy8JCQkiY29sb3IiOiBbZHYuZ2V0VWludDE2KDI4LCB0cnVlKSwgZHYuZ2V0VWludDE2KDMwLCB0cnVlKSwgZHYuZ2V0VWludDE2KDMyLCB0cnVlKV0KLy8JCX07Ci8vCX0KLy99OwovLwkKLy8JCi8vIERlY29kZXMgTEFTIHJlY29yZHMgaW50byBwb2ludHMKLy8KLy92YXIgTEFTRGVjb2RlciA9IGZ1bmN0aW9uKGJ1ZmZlciwgcG9pbnRGb3JtYXRJRCwgcG9pbnRTaXplLCBwb2ludHNDb3VudCwgc2NhbGUsIG9mZnNldCkgewovLwl0aGlzLmFycmF5YiA9IGJ1ZmZlcjsKLy8JdGhpcy5kZWNvZGVyID0gcG9pbnRGb3JtYXRSZWFkZXJzW3BvaW50Rm9ybWF0SURdOwovLwl0aGlzLnBvaW50c0NvdW50ID0gcG9pbnRzQ291bnQ7Ci8vCXRoaXMucG9pbnRTaXplID0gcG9pbnRTaXplOwovLwl0aGlzLnNjYWxlID0gc2NhbGU7Ci8vCXRoaXMub2Zmc2V0ID0gb2Zmc2V0OwovL307Ci8vCi8vTEFTRGVjb2Rlci5wcm90b3R5cGUuZ2V0UG9pbnQgPSBmdW5jdGlvbihpbmRleCkgewovLwlpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHRoaXMucG9pbnRzQ291bnQpCi8vCQl0aHJvdyBuZXcgRXJyb3IoIlBvaW50IGluZGV4IG91dCBvZiByYW5nZSIpOwovLwovLwl2YXIgZHYgPSBuZXcgRGF0YVZpZXcodGhpcy5hcnJheWIsIGluZGV4ICogdGhpcy5wb2ludFNpemUsIHRoaXMucG9pbnRTaXplKTsKLy8JcmV0dXJuIHRoaXMuZGVjb2Rlcihkdik7Ci8vfTsKCm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGV2ZW50KXsKCXZhciBidWZmZXIgPSBldmVudC5kYXRhLmJ1ZmZlcjsKCXZhciBudW1Qb2ludHMgPSBldmVudC5kYXRhLm51bVBvaW50czsKCXZhciBwb2ludFNpemUgPSBldmVudC5kYXRhLnBvaW50U2l6ZTsKCXZhciBwb2ludEZvcm1hdElEID0gZXZlbnQuZGF0YS5wb2ludEZvcm1hdElEOwoJdmFyIHNjYWxlID0gZXZlbnQuZGF0YS5zY2FsZTsKCXZhciBvZmZzZXQgPSBldmVudC5kYXRhLm9mZnNldDsKCXZhciBtaW5zID0gZXZlbnQuZGF0YS5taW5zOwoJdmFyIG1heHMgPSBldmVudC5kYXRhLm1heHM7Cgl2YXIgYmJPZmZzZXQgPSBldmVudC5kYXRhLmJiT2Zmc2V0OwoJCgl2YXIgdGVtcCA9IG5ldyBBcnJheUJ1ZmZlcig0KTsKCXZhciB0ZW1wVWludDggPSBuZXcgVWludDhBcnJheSh0ZW1wKTsKCXZhciB0ZW1wVWludDE2ID0gbmV3IFVpbnQxNkFycmF5KHRlbXApOwoJdmFyIHRlbXBGbG9hdDMyID0gbmV3IEZsb2F0MzJBcnJheSh0ZW1wKTsKCXZhciB0ZW1wSW50MzIgPSBuZXcgSW50MzJBcnJheSh0ZW1wKTsKCXZhciBidWZmZXJWaWV3ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTsKCQoJdmFyIHBCdWZmID0gbmV3IEFycmF5QnVmZmVyKG51bVBvaW50cyozKjQpOwoJdmFyIGNCdWZmID0gbmV3IEFycmF5QnVmZmVyKG51bVBvaW50cyozKjQpOwoJdmFyIGlCdWZmID0gbmV3IEFycmF5QnVmZmVyKG51bVBvaW50cyo0KTsKCXZhciBjbEJ1ZmYgPSBuZXcgQXJyYXlCdWZmZXIobnVtUG9pbnRzKTsKCXZhciBybkJ1ZmYgPSBuZXcgQXJyYXlCdWZmZXIobnVtUG9pbnRzKTsKCXZhciBuckJ1ZmYgPSBuZXcgQXJyYXlCdWZmZXIobnVtUG9pbnRzKTsKCXZhciBwc0J1ZmYgPSBuZXcgQXJyYXlCdWZmZXIobnVtUG9pbnRzICogMik7CgkKCXZhciBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHBCdWZmKTsKCXZhciBjb2xvcnMgPSBuZXcgRmxvYXQzMkFycmF5KGNCdWZmKTsKCXZhciBpbnRlbnNpdGllcyA9IG5ldyBGbG9hdDMyQXJyYXkoaUJ1ZmYpOwoJdmFyIGNsYXNzaWZpY2F0aW9ucyA9IG5ldyBVaW50OEFycmF5KGNsQnVmZik7Cgl2YXIgcmV0dXJuTnVtYmVycyA9IG5ldyBVaW50OEFycmF5KHJuQnVmZik7Cgl2YXIgbnVtYmVyT2ZSZXR1cm5zID0gbmV3IFVpbnQ4QXJyYXkobnJCdWZmKTsKCXZhciBwb2ludFNvdXJjZUlEcyA9IG5ldyBVaW50MTZBcnJheShwc0J1ZmYpOwoJdmFyIHRpZ2h0Qm91bmRpbmdCb3ggPSB7CgkJbWluOiBbIE51bWJlci5QT1NJVElWRV9JTkZJTklUWSwgTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZLCBOdW1iZXIuUE9TSVRJVkVfSU5GSU5JVFldLAoJCW1heDogWyBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgLCBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgLCBOdW1iZXIuTkVHQVRJVkVfSU5GSU5JVFkgXQoJfTsKCQoJCgkvLyB0ZW1wIGFycmF5cyBzZWVtIHRvIGJlIHNpZ25pZmljYW50bHkgZmFzdGVyIHRoYW4gRGF0YVZpZXdzCgkvLyBhdCB0aGUgbW9tZW50OiBodHRwOi8vanNwZXJmLmNvbS9kYXRhdmlldy12cy10ZW1wb3JhcnktZmxvYXQ2NGFycmF5Cglmb3IodmFyIGkgPSAwOyBpIDwgbnVtUG9pbnRzOyBpKyspewoJCgkJLy8gUE9TSVRJT04KCQl0ZW1wVWludDhbMF0gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzBdOwoJCXRlbXBVaW50OFsxXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrMV07CgkJdGVtcFVpbnQ4WzJdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSsyXTsKCQl0ZW1wVWludDhbM10gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzNdOwoJCXZhciB4ID0gdGVtcEludDMyWzBdOwoJCQoJCXRlbXBVaW50OFswXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrNF07CgkJdGVtcFVpbnQ4WzFdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSs1XTsKCQl0ZW1wVWludDhbMl0gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzZdOwoJCXRlbXBVaW50OFszXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrN107CgkJdmFyIHkgPSB0ZW1wSW50MzJbMF07CgkJCgkJdGVtcFVpbnQ4WzBdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSs4XTsKCQl0ZW1wVWludDhbMV0gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzldOwoJCXRlbXBVaW50OFsyXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrMTBdOwoJCXRlbXBVaW50OFszXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrMTFdOwoJCXZhciB6ID0gdGVtcEludDMyWzBdOwoJCQoJCXBvc2l0aW9uc1szKmkrMF0gPSB4ICogc2NhbGVbMF0gKyBvZmZzZXRbMF0gKyBiYk9mZnNldFswXTsKCQlwb3NpdGlvbnNbMyppKzFdID0geSAqIHNjYWxlWzFdICsgb2Zmc2V0WzFdICsgYmJPZmZzZXRbMV07CgkJcG9zaXRpb25zWzMqaSsyXSA9IHogKiBzY2FsZVsyXSArIG9mZnNldFsyXSArIGJiT2Zmc2V0WzJdOwoJCQoJCXRpZ2h0Qm91bmRpbmdCb3gubWluWzBdID0gTWF0aC5taW4odGlnaHRCb3VuZGluZ0JveC5taW5bMF0sIHBvc2l0aW9uc1szKmkrMF0pOwoJCXRpZ2h0Qm91bmRpbmdCb3gubWluWzFdID0gTWF0aC5taW4odGlnaHRCb3VuZGluZ0JveC5taW5bMV0sIHBvc2l0aW9uc1szKmkrMV0pOwoJCXRpZ2h0Qm91bmRpbmdCb3gubWluWzJdID0gTWF0aC5taW4odGlnaHRCb3VuZGluZ0JveC5taW5bMl0sIHBvc2l0aW9uc1szKmkrMl0pOwoJCQoJCXRpZ2h0Qm91bmRpbmdCb3gubWF4WzBdID0gTWF0aC5tYXgodGlnaHRCb3VuZGluZ0JveC5tYXhbMF0sIHBvc2l0aW9uc1szKmkrMF0pOwoJCXRpZ2h0Qm91bmRpbmdCb3gubWF4WzFdID0gTWF0aC5tYXgodGlnaHRCb3VuZGluZ0JveC5tYXhbMV0sIHBvc2l0aW9uc1szKmkrMV0pOwoJCXRpZ2h0Qm91bmRpbmdCb3gubWF4WzJdID0gTWF0aC5tYXgodGlnaHRCb3VuZGluZ0JveC5tYXhbMl0sIHBvc2l0aW9uc1szKmkrMl0pOwoJCQoJCS8vIElOVEVOU0lUWQoJCXRlbXBVaW50OFswXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrMTJdOwoJCXRlbXBVaW50OFsxXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrMTNdOwoJCXZhciBpbnRlbnNpdHkgPSB0ZW1wVWludDE2WzBdOwoJCWludGVuc2l0aWVzW2ldID0gaW50ZW5zaXR5OwoJCQoJCS8vIFJFVFVSTiBOVU1CRVIsIHN0b3JlZCBpbiB0aGUgZmlyc3QgMyBiaXRzIC0gMDAwMDAxMTEKCQl2YXIgcmV0dXJuTnVtYmVyID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSsxNF0gJiA3OwoJCXJldHVybk51bWJlcnNbaV0gPSByZXR1cm5OdW1iZXI7CgkJCgkJLy8gTlVNQkVSIE9GIFJFVFVSTlMsIHN0b3JlZCBpbiAwMDExMTAwMAoJCW51bWJlck9mUmV0dXJuc1tpXSA9IChidWZmZXJWaWV3W2kqcG9pbnRTaXplKzE0XSAmIDU2KSAvIDg7CgkJCgkJLy8gQ0xBU1NJRklDQVRJT04KCQl2YXIgY2xhc3NpZmljYXRpb24gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzE1XTsKCQljbGFzc2lmaWNhdGlvbnNbaV0gPSBjbGFzc2lmaWNhdGlvbjsKCQkKCQkvLyBQT0lOVCBTT1VSQ0UgSUQKCQl0ZW1wVWludDhbMF0gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzE4XTsKCQl0ZW1wVWludDhbMV0gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzE5XTsKCQl2YXIgcG9pbnRTb3VyY2VJRCA9IHRlbXBVaW50MTZbMF07CgkJcG9pbnRTb3VyY2VJRHNbaV0gPSBwb2ludFNvdXJjZUlEOwoJCQoJCS8vIENPTE9SLCBpZiBhdmFpbGFibGUKCQlpZihwb2ludEZvcm1hdElEID09PSAyKXsKCQkJdGVtcFVpbnQ4WzBdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSsyMF07CgkJCXRlbXBVaW50OFsxXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrMjFdOwoJCQl2YXIgciA9IHRlbXBVaW50MTZbMF07CgkJCQoJCQl0ZW1wVWludDhbMF0gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzIyXTsKCQkJdGVtcFVpbnQ4WzFdID0gYnVmZmVyVmlld1tpKnBvaW50U2l6ZSsyM107CgkJCXZhciBnID0gdGVtcFVpbnQxNlswXTsKCQkJCgkJCXRlbXBVaW50OFswXSA9IGJ1ZmZlclZpZXdbaSpwb2ludFNpemUrMjRdOwoJCQl0ZW1wVWludDhbMV0gPSBidWZmZXJWaWV3W2kqcG9pbnRTaXplKzI1XTsKCQkJdmFyIGIgPSB0ZW1wVWludDE2WzBdOwoJCQkKCQkJY29sb3JzWzMqaSswXSA9IHIgLyA2NTUzNjsKCQkJY29sb3JzWzMqaSsxXSA9IGcgLyA2NTUzNjsKCQkJY29sb3JzWzMqaSsyXSA9IGIgLyA2NTUzNjsKCQl9Cgl9CgkKCXZhciBtZXNzYWdlID0gewoJCXBvc2l0aW9uOiBwQnVmZiwgCgkJY29sb3I6IGNCdWZmLCAKCQlpbnRlbnNpdHk6IGlCdWZmLAoJCWNsYXNzaWZpY2F0aW9uOiBjbEJ1ZmYsCgkJcmV0dXJuTnVtYmVyOiBybkJ1ZmYsCgkJbnVtYmVyT2ZSZXR1cm5zOiBuckJ1ZmYsCgkJcG9pbnRTb3VyY2VJRDogcHNCdWZmLAoJCXRpZ2h0Qm91bmRpbmdCb3g6IHRpZ2h0Qm91bmRpbmdCb3gKCX07CgkJCgl2YXIgdHJhbnNmZXJhYmxlcyA9IFsKCQltZXNzYWdlLnBvc2l0aW9uLAoJCW1lc3NhZ2UuY29sb3IsIAoJCW1lc3NhZ2UuaW50ZW5zaXR5LAoJCW1lc3NhZ2UuY2xhc3NpZmljYXRpb24sCgkJbWVzc2FnZS5yZXR1cm5OdW1iZXIsCgkJbWVzc2FnZS5udW1iZXJPZlJldHVybnMsCgkJbWVzc2FnZS5wb2ludFNvdXJjZUlEXTsKCQkKCXBvc3RNZXNzYWdlKG1lc3NhZ2UsIHRyYW5zZmVyYWJsZXMpOwp9Cg=="));