module.exports = {
  pluginOptions: {
    electronBuilder: {
      builderOptions: {
        // options placed here will be merged with default configuration and passed to electron-builder
        productName: 'pisces-browser',
        appId: 'top.antio.pisces-browser',
        nsis: {
          oneClick: false,
          allowToChangeInstallationDirectory: true,
          installerIcon: 'icon/win32/icon.ico',
          createDesktopShortcut: true,
          createStartMenuShortcut: true
        },
        dmg: {
          contents: [
            {
              x: 110,
              y: 150
            },
            {
              x: 440,
              y: 150,
              type: 'link',
              path: '/Applications'
            }
          ],
          artifactName: '${name}-setup-${os}-${arch}-${version}.${ext}'
        },
        mac: {
          icon: 'icon/darwin/icon.icns',
          artifactName: '${name}-setup-${os}-${arch}-${version}.${ext}'
        },
        win: {
          icon: 'icon/win32/icon.ico',
          artifactName: '${name}-setup-${os}-${arch}-${version}.${ext}'
        },
        linux: {
          icon: 'icon/linux/icon.png',
          artifactName: '${name}-setup-${os}-${arch}-${version}.${ext}'
        },
        publish: [
          {
            provider: 'github',
            releaseType: 'release'
          }
        ]
      }
    }
  }
}
