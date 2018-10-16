
//随机休眠 20 minutes, 避免每次打卡时间都一样
var nMinutes = 20

randSleep(60*nMinutes)
//设置缩放为1080p
SetScale()

CloseApp("钉钉")
sleep(2000)

DevUnLock()

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

    //while (!click("工作"));  
    //while (!click("考勤打卡"));  
    //while (!click("下班打卡"));     
   
    click(543, 1856) //工作button
    sleep(2000)
    click(100, 1000) //考勤打卡button
    sleep(2000)
    click(429, 1102) //下班打卡   
    sleep(2000)   
}


function DevUnLock(){
    var ra = new RootAutomator();
    ra.setScreenMetrics(1080, 1920);
    events.on('exit', function(){
        ra.exit();
    });

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
