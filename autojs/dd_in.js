//本脚本配合auto.js使用
//需启用钉钉急速打卡, 打开app即可完成打卡
//需要设置点亮屏幕即可进入系统, 经测试滑动解锁不稳定, miui 10模拟滑动解锁总是失败
//需要root权限来关闭钉钉, 如果没有root权限, 可去掉CloseApp的调用



var nMinutes = 5  //随机休眠 6 minutes, 避免每次打卡时间都一样

auto()
randSleep(60*nMinutes)

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
    //gesture(500, [300,1692],[300,1600], [300,1500],[300, 1400],[300,1300], [300,1200], [300,1100],[300, 1000] )
    // gesture(500, [300,1600],[300,1550], [300,1500],[300, 1450],[300, 1400],[300,1350],[300,1300],[300,1250],
    //              [300,1200],[300,1150], [300,1100],[300, 1150],[300, 1000]
    //     )
    //press(300, 1600, 200)
    //swipe(300, 1900,310, 100, 100)
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

