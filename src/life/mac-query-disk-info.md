---
tags:
  - mac
---

# 快速查询 Mac 磁盘信息

> 参考：[MacBook M1 查询硬盘写入教程 | 知乎](https://zhuanlan.zhihu.com/p/354385629)

## 安装磁盘工具

[smartmontools](https://www.smartmontools.org/) 是一款用于监控和分析硬盘健康状态的命令行工具。

通过 [Homebrew](./homebrew-guide) 安装：

```bash
brew install smartmontools
```

## 查询磁盘信息

安装后，即可查询磁盘信息：

```bash
smartctl -a disk0
```

::: details 输出磁盘信息参考

```bash
smartctl 7.4 2023-08-01 r5530 [Darwin 24.3.0 arm64] (local build)
Copyright (C) 2002-23, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Model Number:                       APPLE SSD AP2048Q
Serial Number:                      03a486784034c426
Firmware Version:                   499.0.9
PCI Vendor/Subsystem ID:            0x106b
IEEE OUI Identifier:                0x000000
Controller ID:                      0
NVMe Version:                       <1.2
Number of Namespaces:               3
Local Time is:                      Tue Mar 11 19:05:25 2025 CST
Firmware Updates (0x02):            1 Slot
Optional Admin Commands (0x0004):   Frmw_DL
Optional NVM Commands (0x0004):     DS_Mngmt
Maximum Data Transfer Size:         256 Pages

Supported Power States
St Op     Max   Active     Idle   RL RT WL WT  Ent_Lat  Ex_Lat
 0 +     0.00W       -        -    0  0  0  0        0       0

=== START OF SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

SMART/Health Information (NVMe Log 0x02)
Critical Warning:                   0x00
Temperature:                        46 Celsius
Available Spare:                    100%
Available Spare Threshold:          99%
Percentage Used:                    0%
Data Units Read:                    2,122,071 [1.08 TB]
Data Units Written:                 1,233,010 [631 GB]
Host Read Commands:                 35,854,349
Host Write Commands:                14,027,979
Controller Busy Time:               0
Power Cycles:                       12
Power On Hours:                     11
Unsafe Shutdowns:                   0
Media and Data Integrity Errors:    0
Error Information Log Entries:      0

Read 1 entries from Error Information Log failed: GetLogPage failed: system=0x38, sub=0x0, code=745
```

:::

主要信息查看的信息就这些：

- Temperature：硬盘温度
- Data Units Read：磁盘累计读取量
- Data Units Written：磁盘累计写入量
- Power On Hours：通电小时数

懒得看的朋友，也可以直接复制所有信息丢给 AI 分析。
