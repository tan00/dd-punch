//本脚本配合auto.js使用
//需启用钉钉急速打卡, 打开app即可完成打卡
//需要设置点亮屏幕即可进入系统, 经测试滑动解锁不稳定, miui 10模拟滑动解锁总是失败
//需要root权限来关闭钉钉, 如果没有root权限, 可去掉CloseApp的调用


//随机休眠 5 minutes, 避免每次打卡时间都一样
var nMinutes = 5

//randSleep(60*nMinutes)
//设置缩放为1080p
SetScale()

DevUnLock()
CloseApp("钉钉")
sleep(2000)
DDCheckOut()
sleep(5000)
CloseApp("钉钉")


function SetScale(){
    var ra = new RootAutomator();
    ra.setScreenMetrics(1080, 1920);
    events.on('exit', function(){
        ra.exit();
    });
}

//点击下班    
function DDCheckOut() {   
    launchApp("钉钉");
    sleep(9000);

    
    while (!id("home_bottom_tab_button_work").findOne().click())
    sleep(1000)
    

    var dakabutton = desc("考勤打卡").findOne()
    if (dakabutton==null){
        console.show()
        console.log("dakabutton not found ")
    }
    while (!dakabutton.click())
    sleep(1000)

    var checkout = desc("下班打卡").findOne()
    if (checkout==null){
        console.show()
        console.log("checkout not found ")
    }
    while (!checkout.click())
    sleep(1000)
}



function DevUnLock(){
    device.wakeUp()
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
