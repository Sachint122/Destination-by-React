# -*- mode: python ; coding: utf-8 -*-


a = Analysis(
    ['news_editor.py'],
    pathex=[],
    binaries=[],
    datas=[('C:\\Users\\sachi\\AppData\\Local\\Programs\\Python\\Python312\\Lib\\site-packages\\emoji\\unicode_codes\\emoji.json', 'emoji/unicode_codes')],
    hiddenimports=[],
    hookspath=[],
    hooksconfig={},
    runtime_hooks=[],
    excludes=[],
    noarchive=False,
)
pyz = PYZ(a.pure)

exe = EXE(
    pyz,
    a.scripts,
    a.binaries,
    a.datas,
    [],
    name='news_editor',
    debug=False,
    bootloader_ignore_signals=False,
    strip=False,
    upx=True,
    upx_exclude=[],
    runtime_tmpdir=None,
    console=False,
    disable_windowed_traceback=False,
    argv_emulation=False,
    target_arch=None,
    codesign_identity=None,
    entitlements_file=None,
)
