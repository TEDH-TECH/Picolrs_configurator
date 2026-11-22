# PicoLRS Configurator

https://configurator.tedh.in/

Configure and flash PicoLRS boards from the browser. There are two firmware options:

- **PicoLRS (ELRS)**: our ExpressLRS port. Settings are changed over USB on the Parameters page.
- **mLRS (MAVLink)**: MAVLink telemetry link. One UF2 file per device, flashed with BOOTSEL. No USB settings.

## What you need

- A PicoLRS board, Version 1 (V1.1) or Version 2
- Chrome or Edge with Web Serial enabled
- A data USB cable

## Configure a PicoLRS module

1. Select **Connect USB** at the top right and choose the PicoLRS USB device. The board details appear at the top of **Parameters**.
2. Under **Module settings**, set the bind phrase, UART baud rate and AirPort option.
3. Select **Save to board**, then **Re-read** to confirm.

Region, TX/RX and Flash RX as TX are flashing preferences. They are remembered in your browser and are not sent to the board.

The module stores a bind UID, not the original bind phrase text. Keep the phrase you use recorded somewhere safe.

## Flash firmware

Open **Flashing** and pick your board and target. The files for that combination appear after both are picked.

**PicoLRS**

1. Enter bootloader mode with **Enter bootloader** (needs USB connected), or hold BOOTSEL while plugging in. The board appears as an `RP2350` drive.
2. Copy `FS.UF2` to the drive.
3. If the board restarts, enter bootloader mode again.
4. Copy `FIRMWARE.UF2` to the drive.
5. Reconnect over USB and read the module to confirm it is responding.

**mLRS**

1. Hold BOOTSEL while plugging in. The board appears as an `RP2350` drive.
2. Copy the RX file for the drone receiver, or the TX file for the transmitter module.
3. The board restarts by itself when the copy finishes.

Only flash firmware built for your hardware version.

## Firmware versions

| Target | Hardware | Version | Notes |
| --- | --- | --- | --- |
| mLRS | V1.1, V2 | v1.4.03 (2026-11-21) | RX and TX |
| PicoLRS | V2 | v0.1.1 (2026-11-22) | Same firmware as V1.1, with the V2 `FS.UF2` that turns on the PA/LNA |
| PicoLRS | V1.1 | v0.1.1 | RX power update |
| PicoLRS | V1.1 | v0.1.0 | Initial RX 2.4 GHz release |

PicoLRS V1.1 and V2 use the same `FIRMWARE.UF2`. The board settings (pins, power) live in `FS.UF2`, so always flash the `FS.UF2` for your hardware version.

Firmware folders are permanent records. New firmware is added as a new version; an existing UF2 file is never replaced.
