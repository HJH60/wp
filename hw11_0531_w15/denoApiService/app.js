import { Application, Router} from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { sqlHandler, fetchHandler, uploadHandler } from './handler.js'

const app = new Application()
const router = new Router()

router.post('/fetch', fetchHandler)
router.post('/sqlite', sqlHandler)
router.post('/upload', uploadHandler)

app.use(oakCors()); // Enable CORS for All Routes//使用OAKcORS套件將跨站存取的權限打開
app.use(router.routes())//設定路由器
app.use(router.allowedMethods())//允許所有存取方法

console.log('Server run at http://127.0.0.1:6789')//印一行資訊讓使用者知道伺服器跑起來了
await app.listen({ port: 6789 })//停在這傾聽連置PORT6789的訊息
