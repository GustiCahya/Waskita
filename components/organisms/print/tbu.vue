<template>
  <v-card :loading="loadingFetch" class="pa-3 d-none">
    <v-card-title>
      Telusur Benda Uji
      <v-spacer />
      <v-btn color="grey darken-3" nuxt @click="print">
        <v-icon left dark> mdi-printer </v-icon>
        Print
      </v-btn>
    </v-card-title>
    <v-card-text class="white" style="overflow: scroll">
      <div
        id="printPaper"
        style="
          word-wrap: break-word;
          padding: 10px;
          background: white;
          color: black;
        "
      >
        <div class="WordSection1">
          <table
            class="MsoTableGrid"
            border="0"
            cellspacing="0"
            cellpadding="0"
            width="1029"
            style="width: 771.9pt; border-collapse: collapse; border: none"
          >
            <tr style="page-break-inside: avoid; height: 24.35pt">
              <td
                width="792"
                valign="bottom"
                style="
                  width: 594.3pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 24.35pt;
                "
              >
                <p
                  class="MsoNormal"
                  style="margin-bottom: 0cm; line-height: normal"
                >
                  <img
                    width="54"
                    height="51"
                    :src="icon"
                    align="left"
                    hspace="12"
                  /><b
                    ><span lang="EN-US" style="font-size: 14pt"
                      >PT. WASKITA KARYA (Persero) Tbk</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="237"
                style="
                  width: 177.6pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 24.35pt;
                "
              >
                <table
                  class="MsoTableGrid"
                  border="1"
                  cellspacing="0"
                  cellpadding="0"
                  width="222"
                  style="
                    width: 166.35pt;
                    border-collapse: collapse;
                    border: none;
                  "
                >
                  <tr style="height: 4.3pt">
                    <td
                      width="222"
                      valign="top"
                      style="
                        width: 166.35pt;
                        border: solid windowtext 1pt;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 4.3pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        align="center"
                        style="
                          margin-bottom: 0cm;
                          text-align: center;
                          line-height: normal;
                        "
                      >
                        <span lang="EN-US">Form. {{ detail.mainForm }}</span>
                      </p>
                    </td>
                  </tr>
                  <tr style="height: 5.35pt">
                    <td
                      width="222"
                      valign="top"
                      style="
                        width: 166.35pt;
                        border: solid windowtext 1pt;
                        border-top: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 5.35pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        align="center"
                        style="
                          margin-bottom: 0cm;
                          text-align: center;
                          line-height: normal;
                        "
                      >
                        <span lang="EN-US"
                          >Rev.
                          {{ $moment(data.rev).format("DD, MMMM YYYY") }}</span
                        >
                      </p>
                    </td>
                  </tr>
                </table>
                <p
                  class="MsoNormal"
                  style="margin-bottom: 0cm; line-height: normal"
                ></p>
              </td>
            </tr>
          </table>

          <p class="MsoNormal">
            <span lang="EN-US" style="font-size: 7pt; line-height: 107%"
              >&nbsp;</span
            >
          </p>

          <table
            class="MsoTableGrid"
            border="0"
            cellspacing="0"
            cellpadding="0"
            style="border-collapse: collapse; border: none"
          >
            <tr style="height: 10.6pt">
              <td
                width="642"
                style="
                  width: 481.7pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 10.6pt;
                "
              >
                <table
                  class="MsoTableGrid"
                  border="1"
                  cellspacing="0"
                  cellpadding="0"
                  width="576"
                  style="
                    width: 432.15pt;
                    border-collapse: collapse;
                    border: none;
                  "
                >
                  <tr style="height: 12.4pt">
                    <td
                      width="48"
                      valign="top"
                      style="
                        width: 35.85pt;
                        border: solid windowtext 1pt;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">&nbsp;</span>
                      </p>
                    </td>
                    <td
                      width="85"
                      valign="top"
                      style="
                        width: 63.7pt;
                        border: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt"
                          >Business Unit</span
                        >
                      </p>
                    </td>
                    <td
                      width="15"
                      valign="top"
                      style="
                        width: 11.55pt;
                        border: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">:</span>
                      </p>
                    </td>
                    <td
                      width="428"
                      valign="top"
                      style="
                        width: 321.05pt;
                        border: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">{{
                          data.businessUnit
                        }}</span>
                      </p>
                    </td>
                  </tr>
                  <tr style="height: 12.4pt">
                    <td
                      width="48"
                      valign="top"
                      style="
                        width: 35.85pt;
                        border: solid windowtext 1pt;
                        border-top: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">&nbsp;</span>
                      </p>
                    </td>
                    <td
                      width="85"
                      valign="top"
                      style="
                        width: 63.7pt;
                        border: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">Proyek</span>
                      </p>
                    </td>
                    <td
                      width="15"
                      valign="top"
                      style="
                        width: 11.55pt;
                        border: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">:</span>
                      </p>
                    </td>
                    <td
                      width="428"
                      valign="top"
                      style="
                        width: 321.05pt;
                        border: none;
                        padding: 0cm 5.4pt 0cm 5.4pt;
                        height: 12.4pt;
                      "
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">{{
                          data.proyek
                        }}</span>
                      </p>
                    </td>
                  </tr>
                </table>
                <p
                  class="MsoNormal"
                  style="margin-bottom: 0cm; line-height: normal"
                ></p>
              </td>
              <td
                width="384"
                style="
                  width: 287.8pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 10.6pt;
                "
              >
                <table
                  class="MsoTableGrid"
                  border="0"
                  cellspacing="0"
                  cellpadding="0"
                  width="341"
                  style="
                    width: 255.7pt;
                    border-collapse: collapse;
                    border: none;
                  "
                >
                  <tr>
                    <td
                      width="87"
                      valign="top"
                      style="width: 65.35pt; padding: 0cm 5.4pt 0cm 5.4pt"
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt"
                          >No. Formulir</span
                        >
                      </p>
                    </td>
                    <td
                      width="16"
                      valign="top"
                      style="width: 11.8pt; padding: 0cm 5.4pt 0cm 5.4pt"
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">:</span>
                      </p>
                    </td>
                    <td
                      width="238"
                      valign="top"
                      style="width: 178.55pt; padding: 0cm 5.4pt 0cm 5.4pt"
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">{{
                          detail.no
                        }}</span>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td
                      width="87"
                      valign="top"
                      style="width: 65.35pt; padding: 0cm 5.4pt 0cm 5.4pt"
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">Halaman</span>
                      </p>
                    </td>
                    <td
                      width="16"
                      valign="top"
                      style="width: 11.8pt; padding: 0cm 5.4pt 0cm 5.4pt"
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <span lang="EN-US" style="font-size: 9pt">:</span>
                      </p>
                    </td>
                    <td
                      width="238"
                      valign="top"
                      style="width: 178.55pt; padding: 0cm 5.4pt 0cm 5.4pt"
                    >
                      <p
                        class="MsoNormal"
                        style="margin-bottom: 0cm; line-height: normal"
                      >
                        <u
                          ><span lang="EN-US" style="font-size: 9pt"
                            >1 dari {{ totalPages }}</span
                          ></u
                        >
                      </p>
                    </td>
                  </tr>
                </table>
                <p
                  class="MsoNormal"
                  style="margin-bottom: 0cm; line-height: normal"
                ></p>
              </td>
            </tr>
          </table>

          <p class="MsoNormal" style="margin-bottom: 13.6pt">
            <span lang="EN-US" style="font-size: 1pt; line-height: 107%"
              >&nbsp;</span
            >
          </p>

          <table
            class="TableGrid"
            border="0"
            cellspacing="0"
            cellpadding="0"
            width="1052"
            style="margin-left: -1.5pt; border-collapse: collapse"
          >
            <tr style="height: 12.75pt">
              <td
                width="1052"
                colspan="18"
                style="
                  width: 789.15pt;
                  border: solid black 1pt;
                  border-bottom: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span lang="EN-US" style="font-family: 'Arial', sans-serif"
                      >MAMPU TELUSUR BENDA UJI</span
                    ></b
                  >
                </p>
              </td>
              <td
                style="height: 12.75pt; border: none"
                width="0"
                height="26"
              ></td>
            </tr>
            <!-- real header main content -->
            <tr style="height: 12.75pt">
              <td
                width="1023"
                colspan="10"
                style="
                  width: 767pt;
                  border: solid black 1pt;
                  border-top: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span lang="EN-US" style="font-family: 'Arial', sans-serif"
                      >&nbsp;</span
                    ></b
                  >
                </p>
              </td>
            </tr>
            <tr style="height: 13.2pt">
              <td
                width="50"
                rowspan="2"
                style="
                  width: 37.35pt;
                  border-top: none;
                  border-left: solid black 1pt;
                  border-bottom: none;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 13.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >No.</span
                  >
                </p>
              </td>
              <td
                width="162"
                rowspan="2"
                style="
                  width: 121.35pt;
                  border: none;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 13.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Nomor Kendaraan /</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Truck Mixer /</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Nomor adukan Molen</span
                  >
                </p>
              </td>
              <td
                width="132"
                rowspan="2"
                style="
                  width: 99pt;
                  border: none;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 13.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Nomor
                  </span>
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Formulir</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >PW-QTY-07-02-01</span
                  >
                </p>
              </td>
              <td
                width="150"
                colspan="2"
                style="
                  width: 112.5pt;
                  border: none;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 13.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Pembuatan</span
                  >
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Benda Uji</span
                  >
                </p>
              </td>
              <td
                width="78"
                rowspan="2"
                style="
                  width: 58.5pt;
                  border: none;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 13.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Jumlah Benda Uji</span
                  >
                </p>
              </td>
              <td
                width="174"
                rowspan="2"
                style="
                  width: 130.5pt;
                  border: none;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 13.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Kode
                  </span>
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Silider/
                  </span>
                </p>
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Kubus</span
                  >
                </p>
              </td>
              <td
                width="84"
                rowspan="2"
                style="
                  width: 63pt;
                  border: none;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 13.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Dimensi Benda Uji *)</span
                  >
                </p>
              </td>
              <td
                width="193"
                colspan="2"
                style="
                  width: 144.8pt;
                  border: none;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 13.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Petugas Pembuat Benda Uji</span
                  >
                </p>
              </td>
            </tr>
            <tr style="height: 13.2pt">
              <td
                width="84"
                style="
                  width: 63pt;
                  border-top: solid black 1pt;
                  border-left: none;
                  border-bottom: none;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 13.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Tanggal</span
                  >
                </p>
              </td>
              <td
                width="66"
                style="
                  width: 49.5pt;
                  border-top: solid black 1pt;
                  border-left: none;
                  border-bottom: none;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 13.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Jam</span
                  >
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border-top: solid black 1pt;
                  border-left: none;
                  border-bottom: none;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 13.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >Nama</span
                  >
                </p>
              </td>
              <td
                width="109"
                style="
                  width: 81.8pt;
                  border-top: solid black 1pt;
                  border-left: none;
                  border-bottom: none;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 13.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >T. Tangan</span
                  >
                </p>
              </td>
            </tr>
            <tr style="height: 12.75pt">
              <td
                width="50"
                style="
                  width: 37.35pt;
                  border: solid black 1pt;
                  border-bottom: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >1</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="162"
                style="
                  width: 121.35pt;
                  border-top: solid black 1pt;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >2</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="132"
                style="
                  width: 99pt;
                  border-top: solid black 1pt;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >3</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border-top: solid black 1pt;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >4</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="66"
                style="
                  width: 49.5pt;
                  border-top: solid black 1pt;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >5</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="78"
                style="
                  width: 58.5pt;
                  border-top: solid black 1pt;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >6</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="174"
                style="
                  width: 130.5pt;
                  border-top: solid black 1pt;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >7</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border-top: solid black 1pt;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >8</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border-top: solid black 1pt;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >9</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="109"
                style="
                  width: 81.8pt;
                  border-top: solid black 1pt;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid black 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 12.75pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 7pt; font-family: 'Arial', sans-serif"
                      >10</span
                    ></b
                  >
                </p>
              </td>
            </tr>
            <!-- header main content -->
            <tr style="height: 7.2pt">
              <td
                width="50"
                style="
                  width: 37.35pt;
                  border-top: none;
                  border-left: solid windowtext 1pt;
                  border-bottom: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="162"
                style="
                  width: 121.35pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="132"
                rowspan="999999999"
                style="
                  width: 99pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ tbm.no }}</span
                  >
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="66"
                style="
                  width: 49.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="78"
                style="
                  width: 58.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="174"
                style="
                  width: 130.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
            </tr>
            <!-- main content -->
            <tr
              v-for="(item, idx) in items"
              :key="item._id"
              style="height: 7.2pt"
            >
              <td
                width="50"
                style="
                  width: 37.35pt;
                  border-top: none;
                  border-left: solid windowtext 1pt;
                  border-bottom: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ idx + 1 }}</span
                  >
                </p>
              </td>
              <td
                width="162"
                style="
                  width: 121.35pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                  >
                    {{ item.noKendaraan }}
                  </span>
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    v-if="idx === 0"
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{
                      detail.tanggalPembuatan
                        ? $moment(detail.tanggalPembuatan).format("DD-MMM-YY")
                        : ""
                    }}</span
                  >
                </p>
              </td>
              <td
                width="66"
                style="
                  width: 49.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.jamPembuatan }}</span
                  >
                </p>
              </td>
              <td
                width="78"
                style="
                  width: 58.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.jumlahBendaUji }}</span
                  >
                </p>
              </td>
              <td
                width="174"
                style="
                  width: 130.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.kodeSilinder }}</span
                  >
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                  >
                    {{ item.dimensi }}
                  </span>
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.personilNama }}</span
                  >
                </p>
              </td>
              <td
                width="84"
                style="
                  position: relative;
                  width: 63pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                  text-align: center;
                "
              >
                <span
                  v-if="idx === 0"
                  lang="EN-US"
                  style="
                    position: absolute;
                    top: -12px;
                    left: 3px;
                  "
                >
                  <img
                    v-if="item.personilTtd"
                    id="Picture 13324"
                    width="45"
                    :src="item.personilTtd"
                  />
                </span>
                <span
                  v-else
                  lang="EN-US"
                  style="
                    position: absolute;
                    top: 13px;
                    left: 3px;
                  "
                >
                  <img
                    v-if="item.personilTtd"
                    id="Picture 13324"
                    width="45"
                    :src="item.personilTtd"
                  />
                </span>
              </td>
            </tr>
            <!-- footer main content -->
            <tr style="height: 7.2pt">
              <td
                width="50"
                style="
                  width: 37.35pt;
                  border: solid windowtext 1pt;
                  border-top: none;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                  >
                  </span>
                </p>
              </td>
              <td
                width="162"
                style="
                  width: 121.35pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="66"
                style="
                  width: 49.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="78"
                style="
                  width: 58.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="174"
                style="
                  width: 130.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                  ></span>
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="84"
                style="
                  width: 63pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.4pt 0cm 0cm 0cm;
                  height: 7.2pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 15.85pt;
                    margin-bottom: 0cm;
                    margin-left: 17pt;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
            </tr>
          </table>

          <table style="margin-top: 10px; margin-bottom: 10px">
            <p
              class="MsoNormal"
              style="
                margin-top: 0cm;
                margin-right: 43.85pt;
                margin-bottom: 0.15pt;
                margin-left: 0cm;
              "
            >
              <span
                lang="EN-US"
                style="
                  font-size: 7pt;
                  line-height: 107%;
                  font-family: 'Arial', sans-serif;
                "
              >
                Keterangan :</span
              >
            </p>

            <p
              class="MsoNormal"
              style="
                margin-top: 0cm;
                margin-right: 43.85pt;
                margin-bottom: 0.15pt;
                margin-left: 0cm;
              "
            >
              <span
                lang="EN-US"
                style="
                  font-size: 7pt;
                  line-height: 107%;
                  font-family: 'Arial', sans-serif;
                "
                >*) Benda Uji silinder ukuran Ø15 x 30 cm</span
              >
            </p>

            <p
              class="MsoNormal"
              style="
                margin-top: 0cm;
                margin-right: 43.85pt;
                margin-bottom: 0.15pt;
                margin-left: 0cm;
              "
            >
              <span
                lang="EN-US"
                style="
                  font-size: 7pt;
                  line-height: 107%;
                  font-family: 'Arial', sans-serif;
                "
                >&nbsp;&nbsp;&nbsp;Benda Uji Kubus ukuran 15 x 15 cm, 20 x 20
                cm, 25 x 25 cm</span
              >
            </p>

            <p
              class="MsoNormal"
              style="
                margin-top: 0cm;
                margin-right: 43.85pt;
                margin-bottom: 0.15pt;
                margin-left: 0cm;
              "
            >
              <span
                lang="EN-US"
                style="
                  font-size: 7pt;
                  line-height: 107%;
                  font-family: 'Arial', sans-serif;
                "
                >Penulisan kode benda uji mengikuti aturan di
                IK.PW-QTY-07-02</span
              >
            </p>
          </table>

          <table
            class="MsoTableGrid"
            border="0"
            cellspacing="0"
            cellpadding="0"
            align="left"
            width="1047"
            style="
              width: 784.95pt;
              border-collapse: collapse;
              border: none;
              margin-left: 6.75pt;
              margin-right: 6.75pt;
            "
          >
            <tr style="height: 13.5pt">
              <td
                width="160"
                style="
                  width: 120.25pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 13.5pt;
                "
              ></td>
              <td
                width="690"
                valign="top"
                style="
                  width: 517.4pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 13.5pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="196"
                style="
                  width: 147.3pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 13.5pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >{{ dibuatOleh.lokasi }},
                    {{ $moment(dibuatOleh.tanggal).format("DD MMMM YYYY")
                    }}<br />
                    Dibuat oleh,</span
                  >
                </p>
              </td>
            </tr>
            <tr style="height: 2.05pt">
              <td
                width="160"
                style="
                  width: 120.25pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 2.05pt;
                "
              ></td>
              <td
                width="690"
                valign="top"
                style="
                  width: 517.4pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 2.05pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-top: 0cm;
                    margin-right: 43.85pt;
                    margin-bottom: 0.15pt;
                    margin-left: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span lang="EN-US">&nbsp;</span>
                </p>
              </td>
              <td
                width="196"
                style="
                  width: 147.3pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 2.05pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin: 0;
                    text-align: center;
                    line-height: normal;
                    min-height: 62px;
                  "
                >
                  <img
                    v-if="dibuatOleh.ttd"
                    width="72"
                    height="62"
                    :src="dibuatOleh.ttd"
                    align="center"
                    hspace="12"
                  />
                </p>
              </td>
            </tr>
            <tr style="height: 13.5pt">
              <td
                width="160"
                style="
                  width: 120.25pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 13.5pt;
                "
              ></td>
              <td
                width="690"
                valign="top"
                style="
                  width: 517.4pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 13.5pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="196"
                style="
                  width: 147.3pt;
                  padding: 0cm 5.4pt 0cm 5.4pt;
                  height: 13.5pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    lang="EN-US"
                    style="font-size: 7pt; font-family: 'Arial', sans-serif"
                    >{{ dibuatOleh.jabatan }}<br />
                    ( {{ dibuatOleh.nama }} )</span
                  >
                </p>
              </td>
            </tr>
          </table>
        </div>
      <div
        v-for="(item, idx) in detail.lampiran"
        id="section"
        :key="item._id"
      >
          <p style="margin-bottom:50px">Lampiran {{ idx + 1 }} : {{ item.judul }}</p>
          <div style="display:flex; justify-content:center; align-items:center;">
            <img style="max-height: 13cm" :src="item.gambar" />
          </div>
      </div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  layout: "dashboard",
  props: {
    idTelusur: String,
  },
  data() {
    return {
      baseUrl: "",
      data: {},
      detail: {},
      tbm: {},
      items: [],
      dibuatOleh: {},
      loadingFetch: false,
    };
  },
  computed: {
    icon() {
      return require("./logo.json")?.image;
    },
    totalPages() {
      return 1 + (this?.detail?.lampiran?.length || 0)
    },
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      // handle baseUrl
      this.baseUrl = window.location.origin;
      // handle data telusur
      const id = this.$route.query.id || this.idTelusur;
      if (id) {
        this.loadingFetch = true;
        try {
          const result = await this.$axios
            .get("/api/Telusur/get", {
              params: {
                jsonQuery: JSON.stringify({
                  _id: id,
                  pipeline: [
                    {
                      $lookup: {
                        from: "TelusurBendaUji",
                        localField: "idTbu",
                        foreignField: "_id",
                        as: "tbu",
                      },
                    },
                    {
                      $lookup: {
                        from: "TelusurBahanMasuk",
                        localField: "idTbm",
                        foreignField: "_id",
                        as: "tbm",
                      },
                    },
                  ],
                }),
              },
            })
            .then((res) => res?.data?.result);
          if (result.length >= 1) {
            const telusur = result[0];
            const tbu = telusur?.tbu?.[0] || {};
            const tbm = telusur?.tbm?.[0] || {};
            this.data = telusur;
            this.detail = tbu;
            this.tbm = tbm;
            this.mengetahui = tbu?.mengetahui || {};
            this.dibuatOleh = tbu?.dibuatOleh || {};
            this.items = tbu?.items?.map((item, idx) => {
              return {
                ...item,
                jumlahBendaUji: tbu?.jumlahBendaUji,
                dimensi: tbu?.dimensi?.[idx]?.value,
                personilNama: tbu?.personil?.[idx]?.nama,
                personilTtd: tbu?.personil?.[idx]?.ttd,
              };
            });
          }
        } catch (err) {
          this.$swal(err?.response?.data || err?.message, "", "error");
        }
        this.loadingFetch = false;
      }
    },
    async print() {
      await this.fetchData();
      const content = document.getElementById("printPaper").cloneNode(true);
      const w = window.open("", "", "width=1050,height=794");
      w.document.head.innerHTML =
        document.getElementsByTagName("head")[0].innerHTML;
      w.document.body.append(content);
      w.print();
    },
  },
};
</script>
<style scoped>
/* Font Definitions */
@font-face {
  font-family: "Cambria Math";
  panose-1: 2 4 5 3 5 4 6 3 2 4;
}
@font-face {
  font-family: Calibri;
  panose-1: 2 15 5 2 2 2 4 3 2 4;
}
@media print {
  .WordSection1 {
    page-break-after: always;
  }
  #section:not(:last-of-type) {
    page-break-after: always;
  }
}
@page {
  size: landscape;
}
@page WordSection1 {
  size: 841.8pt 595.2pt;
  margin: 36pt 36pt 36pt 36pt;
}
div.WordSection1 {
  page: WordSection1;
}
div#section{
  page: WordSection1;
}
/* Style Definitions */
p.MsoNormal,
li.MsoNormal,
div.MsoNormal {
  margin-top: 0cm;
  margin-right: 0cm;
  margin-bottom: 8pt;
  margin-left: 0cm;
  line-height: 107%;
  font-size: 11pt;
  font-family: "Calibri", sans-serif;
  color: black;
}
.MsoChpDefault {
  font-family: "Calibri", sans-serif;
}
.MsoPapDefault {
  margin-bottom: 8pt;
  line-height: 107%;
}
</style>
