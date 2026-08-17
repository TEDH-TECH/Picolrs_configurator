# PicoLRS Configurator

https://configurator.tedh.in/

Configure and flash a PicoLRS module from the browser. The configurator uses USB serial to read and save module settings, then provides the matching UF2 files for flashing.

## What you need

- A PicoLRS module connected by USB
- Chrome or Edge with Web Serial enabled
- A data USB cable

## Configure a module

1. Open the configurator and go to **USB**.
2. Choose the PicoLRS USB device, then select **Read module**.
3. In **Parameters**, set the bind phrase, region, RX/TX options, and UART baud rate.
4. Save the settings, then read the module again to confirm them.

The module stores a bind UID, not the original bind phrase text. Keep the phrase you use recorded somewhere safe.

## Flash firmware

1. Open **Flashing** and select the required firmware version.
2. Enter bootloader mode from the configurator. The module appears as an `RPI-RP2` drive.
3. Copy `FS.UF2` to the drive.
4. If the board restarts, enter bootloader mode again.
5. Copy `FIRMWARE.UF2` to the drive.
6. Reconnect over USB and read the module to confirm it is responding.

Only flash firmware built for the selected target. The current release supports **RP2350 RX 2.4 GHz**.

## Firmware versions

- `v0.1.1`: RP2350 RX power update
- `v0.1.0`: initial RP2350 RX 2.4 GHz release

Firmware folders are permanent records. New firmware is added as a new version; an existing UF2 file is never replaced.
