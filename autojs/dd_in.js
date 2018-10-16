//需启用急速打卡, 打开app即可完成打卡

//随机休眠 6 minutes, 避免每次打卡时间都一样
var nMinutes = 6

randSleep(60 *nMinutes)
DevUnLock()

CloseApp("钉钉")
sleep(1000)

launchApp("钉钉");
sleep(1000)
exit()



function DevUnLock(){
    device.wakeUp()
    sleep(1000)
    //滑动手势进行解锁
    gesture(500, [300,1692],[300,1363], [300,1102]  )
    sleep(1000)
    home()
}

//随机休眠 [0,n]秒
function randSleep(nSecs){    
    sleep(nSecs*random(0,1000))
}

//关闭应用
function CloseApp(appName){
    //adb shell am force-stop com.alibaba.android.rimet
    var cmd = 'am force-stop ' + app.getPackageName(appName)  
    shell(cmd, true);
}

