const createDevice = (list, newDev) => {
  if (!newDev.name || !newDev.room || newDev.powerWatts <= 0) {
    return false;
  }
  const newId = `DEV_${String(list.length + 1).padStart(3, '0')}`;
  const deviceToAdd = {
    id: newId,
    name: newDev.name,
    room: newDev.room,
    powerWatts: newDev.powerWatts,
    isActive: newDev.isActive !== undefined ? newDev.isActive : true,
  };
  list.push(deviceToAdd);
  return true;
};

const readDevicesByRoom = (list, roomName) => {
  return list.filter(device => device.room.toLowerCase() === roomName.toLowerCase());
};

const updateDevice = (list, id, updateData) => {
  const targetDevice = list.find(device => device.id === id);
  if (!targetDevice) return false;

  if (updateData.name !== undefined) {
    targetDevice.name = updateData.name;
  }
  if (updateData.room !== undefined) {
    targetDevice.room = updateData.room;
  }
  if (updateData.powerWatts !== undefined) {
    targetDevice.powerWatts = updateData.powerWatts;
  }
  if (updateData.isActive !== undefined) {
    targetDevice.isActive = updateData.isActive;
  }

  return true;
};

const deleteDevice = (list, id) => {
  const index = list.findIndex(device => device.id === id);
  if (index === -1) return false;
  list.splice(index, 1);
  return true;
};

const devices = [];

createDevice(devices, { name: "Điều hòa", room: "Phòng Khách", powerWatts: 1200 });
createDevice(devices, { name: "Đèn LED", room: "Phòng Ngủ", powerWatts: 40 });

console.log("Danh sách thiết bị:", devices);
console.log("Thiết bị phòng Khách:", readDevicesByRoom(devices, "Phòng Khách"));

updateDevice(devices, "DEV_001", { isActive: false, powerWatts: 1100 });
console.log("Sau khi cập nhật DEV_001:", devices[0]);

deleteDevice(devices, "DEV_002");
console.log("Sau khi xóa DEV_002:", devices);