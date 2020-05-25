const argv = require('yargs').argv;
const childProcess = require("child_process")
const path = require("path")

/**
 * 数据备份
 */
const mongodump = async (host, port, blog) => {
  const res = await childProcess.exec(`mongodump --host ${host} --port ${port} --db ${blog} --out ${path.join(__dirname, '/backup/')}`)
}

/**
 * 数据恢复
 */
const restore = async (host, port, dbname, backupDbName) => {
  const res = await childProcess.exec(`mongorestore --drop -h  ${host}:${port} -d ${dbname}  ${path.join(__dirname, `/backup/${backupDbName}`)}`)
}

(() => {
  const { port = '27017', host = "localhost", dbname = "blog", backupDbName = "blog", type = "mongodump" } = argv;
  if (type === "mongodump") {
    mongodump(host, port, dbname)
  } else if (type === "restore") {
    restore(host, port, dbname, backupDbName)
  }
})()