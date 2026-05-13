Set WshShell = CreateObject("WScript.Shell")
WshShell.CurrentDirectory = "C:\Users\Jake\Projects\antigrav-playground\weather-widget"
WshShell.Run "cmd /c npm start", 0
Set WshShell = Nothing
