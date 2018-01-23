module.exports = {
    DATABASE: 'labmonitor',
    NODE_TABLE: 'node_info',
    SENSOR_TABLE: 'sensor_values',
    NODE_TABLE_FIELDS: ["id", "owner", "description", "equipment"],
    SENSOR_TABLE_FIELDS:
        ["id", "date", "time", "humidity", "temp_ambient", "temp_ir",
            "carbon_monoxide", "methane", "hydrogen", "sound", "vibration", "battery"]
}