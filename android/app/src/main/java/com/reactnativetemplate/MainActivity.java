package com.reactnativetemplate;

import com.reactnativenavigation.NavigationActivity;

public class MainActivity extends NavigationActivity {
    @Override
    public void addDefaultSplashLayout() {
        setContentView(R.layout.launch_screen);
    }
}
