<template>
  <v-card :loading="loadingFetch" class="pa-3 d-none">
    <v-card-title>
      Telusur Hasil Test
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
        <div id="section" class="WordSection1">
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
                width="1026"
                colspan="16"
                style="
                  width: 769.7pt;
                  border: solid black 1pt;
                  border-bottom: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
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
                      >MAMPU TELUSUR HASIL TES BENDA UJI</span
                    ></b
                  >
                </p>
              </td>
            </tr>
            <tr style="height: 12.75pt">
              <td
                width="1026"
                colspan="16"
                style="
                  width: 769.7pt;
                  border: none;
                  border-bottom: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
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
            <!-- real header -->
            <tr style="height: 1pt">
              <td
                width="114"
                rowspan="2"
                style="
                  width: 85.2pt;
                  border: solid windowtext 1pt;
                  border-top: none;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1pt;
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
                    >Kode</span
                  >
                </p>
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
                    >Silinder/</span
                  >
                </p>
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
                    >Kubus</span
                  >
                </p>
              </td>
              <td
                width="78"
                rowspan="2"
                style="
                  width: 58.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1pt;
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
                    >Nomor</span
                  >
                </p>
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
                    >Formulir</span
                  >
                </p>
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
                    >PW-QTY-07-02-02</span
                  >
                </p>
              </td>
              <td
                width="54"
                rowspan="2"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1pt;
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
                    >Tanggal</span
                  >
                </p>
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
                    >Pembuatan</span
                  >
                </p>
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
                    >Benda Uji</span
                  >
                </p>
              </td>
              <td
                width="54"
                rowspan="2"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1pt;
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
                    >Tanggal</span
                  >
                </p>
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
                    >Pengetesan</span
                  >
                </p>
              </td>
              <td
                width="66"
                rowspan="2"
                style="
                  width: 49.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1pt;
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
                    >Umur Hari</span
                  >
                </p>
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
                    >Saat</span
                  >
                </p>
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
                    >Pengetesan</span
                  >
                </p>
              </td>
              <td
                width="126"
                colspan="2"
                style="
                  width: 94.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1pt;
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
                    >Density / Kekuatan Beton</span
                  >
                </p>
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
                    >Yang disyaratkan</span
                  >
                </p>
              </td>
              <td
                width="126"
                colspan="2"
                style="
                  width: 94.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1pt;
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
                    >Hasil Pengetesan</span
                  >
                </p>
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
                    >Laboratorium</span
                  >
                </p>
              </td>
              <td
                width="114"
                rowspan="2"
                style="
                  width: 85.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1pt;
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
                    >No. Referensi/</span
                  >
                </p>
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
                    >Kode Sertifikat/</span
                  >
                </p>
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
                    >Hasil Tes Terlampir</span
                  >
                </p>
              </td>
              <td
                width="90"
                colspan="2"
                style="
                  width: 67.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1pt;
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
                    >Laboratorium/</span
                  >
                </p>
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
                    >Badan Pengetesan</span
                  >
                </p>
              </td>
              <td
                width="96"
                colspan="2"
                style="
                  width: 72pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1pt;
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
                    >Saksi Pengetesan</span
                  >
                </p>
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
                    >dari Waskita</span
                  >
                </p>
              </td>
              <td
                width="109"
                colspan="2"
                style="
                  width: 81.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1pt;
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
                    >Saksi Pengetesan</span
                  >
                </p>
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
                    >dari Pemberi Kerja</span
                  >
                </p>
              </td>
            </tr>
            <tr style="height: 1.35pt">
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.35pt;
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
                    >density</span
                  >
                </p>
              </td>
              <td
                width="78"
                style="
                  width: 58.5pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.35pt;
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
                    >Tekan<s>/Lentur*)</s></span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.35pt;
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
                    >density</span
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
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.35pt;
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
                    >Tekan<s>/Lentur*)</s></span
                  >
                </p>
              </td>
              <td
                width="42"
                style="
                  width: 31.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.35pt;
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
                    >Nama</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border: solid windowtext 1pt;
                  border-left: none;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.35pt;
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
                    >Alamat</span
                  >
                </p>
              </td>
              <td
                width="42"
                style="
                  width: 31.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.35pt;
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
                    >Nama</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.35pt;
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
                    >T. Tangan</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.35pt;
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
                    >Nama</span
                  >
                </p>
              </td>
              <td
                width="61"
                style="
                  width: 45.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.35pt;
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
                    >T. Tangan</span
                  >
                </p>
              </td>
            </tr>
            <tr style="height: 1.25pt">
              <td
                width="114"
                style="
                  width: 85.2pt;
                  border: solid windowtext 1pt;
                  border-top: none;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 6pt; font-family: 'Arial', sans-serif"
                      >1</span
                    ></b
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
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 6pt; font-family: 'Arial', sans-serif"
                      >2</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 6pt; font-family: 'Arial', sans-serif"
                      >3</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 6pt; font-family: 'Arial', sans-serif"
                      >4</span
                    ></b
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
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 6pt; font-family: 'Arial', sans-serif"
                      >5</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 6pt; font-family: 'Arial', sans-serif"
                      >6</span
                    ></b
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
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 6pt; font-family: 'Arial', sans-serif"
                      >7</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 6pt; font-family: 'Arial', sans-serif"
                      >8</span
                    ></b
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
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 6pt; font-family: 'Arial', sans-serif"
                      >9</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="114"
                style="
                  width: 85.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 6pt; font-family: 'Arial', sans-serif"
                      >10</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="90"
                colspan="2"
                style="
                  width: 67.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 6pt; font-family: 'Arial', sans-serif"
                      >11</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="96"
                colspan="2"
                style="
                  width: 72pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 6pt; font-family: 'Arial', sans-serif"
                      >12</span
                    ></b
                  >
                </p>
              </td>
              <td
                width="109"
                colspan="2"
                style="
                  width: 81.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  <b
                    ><span
                      lang="EN-US"
                      style="font-size: 6pt; font-family: 'Arial', sans-serif"
                      >13</span
                    ></b
                  >
                </p>
              </td>
            </tr>
            <!-- header main content -->
            <tr style="height: 1.25pt">
              <td
                width="114"
                style="
                  width: 85.2pt;
                  border-top: none;
                  border-left: solid windowtext 1pt;
                  border-bottom: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="78"
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
                    >{{ tbu.no }}</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
                "
              >
                <p
                  class="MsoNormal"
                  style="margin-bottom: 0cm; line-height: normal"
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
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="114"
                style="
                  width: 85.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="42"
                style="
                  width: 31.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="42"
                style="
                  width: 31.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="61"
                style="
                  width: 45.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
            </tr>
            <!-- main content -->
            <tr
              v-for="(item, idx) in items"
              :key="item._id"
              style="height: 1.25pt; text-align: center"
            >
              <td
                width="114"
                style="
                  width: 85.2pt;
                  border-top: none;
                  border-left: solid windowtext 1pt;
                  border-bottom: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
                "
              >
                <p
                  class="MsoNormal"
                  style="margin-bottom: 0cm; line-height: normal"
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.kodeSilinder }}</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
                "
              >
                <p
                  class="MsoNormal"
                  style="margin-bottom: 0cm; line-height: normal"
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
                width="54"
                style="
                  width: 40.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
                "
              >
                <p
                  class="MsoNormal"
                  style="margin-bottom: 0cm; line-height: normal"
                >
                  <span
                    v-if="idx === 0"
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{
                      detail.tanggalPengetesan
                        ? $moment(detail.tanggalPengetesan).format("DD-MMM-YY")
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
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    v-if="idx === 0"
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ detail.umurHari }}</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    v-if="idx === 0"
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ detail.perkiraanDensity }}</span
                  >
                </p>
              </td>
              <td
                width="78"
                style="
                  width: 58.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    v-if="idx === 0"
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ detail.perkiraanTekan }}</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
                "
              >
                <p
                  class="MsoNormal"
                  style="margin-bottom: 0cm; line-height: normal"
                >
                  <span
                    lang="EN-US"
                    style="font-size: 6pt; font-family: 'Arial', sans-serif"
                    >{{ item.hasilDensity }}</span
                  >
                </p>
              </td>
              <td
                width="78"
                style="
                  width: 58.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >{{ item.hasilTekan }}</span
                  >
                </p>
              </td>
              <td
                width="114"
                style="
                  width: 85.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >{{ item.txtHasilTest }}</span
                  >
                </p>
              </td>
              <td
                width="42"
                style="
                  width: 31.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >{{ item.laboratoriumNama }}</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >{{ item.laboratoriumAlamat }}</span
                  >
                </p>
              </td>
              <td
                width="42"
                style="
                  width: 31.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >{{ item.saksiWaskitaNama }}</span
                  >
                </p>
              </td>
              <td
                width="42"
                style="
                  width: 31.5pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
                "
              >
                <p
                  class="MsoNormal"
                  align="center"
                  style="
                    position: relative;
                    margin-bottom: 0cm;
                    text-align: center;
                    line-height: normal;
                  "
                >
                  <span
                    v-if="idx === 0"
                    lang="EN-US"
                    style="position: absolute; top: -12px; left: 3px"
                  >
                    <img
                      v-if="item.saksiWaskitaTtd"
                      id="Picture 13324"
                      width="45"
                      :src="item.saksiWaskitaTtd"
                    />
                  </span>
                  <span
                    v-else
                    lang="EN-US"
                    style="position: absolute; top: 13px; left: 3px"
                  >
                    <img
                      v-if="item.saksiWaskitaTtd"
                      id="Picture 13324"
                      width="45"
                      :src="item.saksiWaskitaTtd"
                    />
                  </span>
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >{{ item.saksiPemberiKerjaNama }}</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  position: relative;
                  width: 36pt;
                  border: none;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
                "
              >
                <span
                  v-if="idx === 0"
                  lang="EN-US"
                  style="position: absolute; top: -12px; left: 3px"
                >
                  <img
                    v-if="item.saksiPemberiKerjaTtd"
                    id="Picture 13324"
                    width="45"
                    :src="item.saksiPemberiKerjaTtd"
                  />
                </span>
                <span
                  v-else
                  lang="EN-US"
                  style="position: absolute; top: 13px; left: 3px"
                >
                  <img
                    v-if="item.saksiPemberiKerjaTtd"
                    id="Picture 13324"
                    width="45"
                    :src="item.saksiPemberiKerjaTtd"
                  />
                </span>
              </td>
            </tr>
            <!-- footer of main content -->
            <tr style="height: 1.25pt">
              <td
                width="114"
                style="
                  width: 85.2pt;
                  border: solid windowtext 1pt;
                  border-top: none;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="54"
                style="
                  width: 40.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="114"
                style="
                  width: 85.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="42"
                style="
                  width: 31.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="42"
                style="
                  width: 31.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="48"
                style="
                  width: 36pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="61"
                style="
                  width: 45.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                    >&nbsp;</span
                  >
                </p>
              </td>
              <td
                width="61"
                style="
                  width: 45.5pt;
                  border-top: none;
                  border-left: none;
                  border-bottom: solid windowtext 1pt;
                  border-right: solid windowtext 1pt;
                  padding: 0.7pt 0cm 0cm 0cm;
                  height: 1.25pt;
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
                >*) Coret yang tidak perlu</span
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
                >Pencatatan hasil tes beton yang dilakukan (7, 14, 28 hari)
                dilokasi pengecoran dilakukan dengan melakukan kode penomoran
                yang sama</span
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
                >Lampirkan copy sertifikat hasil tes beton dari
                laboratorium</span
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
          v-for="(item, idx) in detail.hasilTest"
          id="section"
          :key="item._id"
        >
          <p style="margin-bottom: 20px">
            Lampiran {{ idx + 1 }} : {{ item.judul }}
          </p>
          <img style="max-height: 18cm" :src="item.gambar" />
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
      tbu: {},
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
      return 1 + (this?.detail?.hasilTest?.length || 0);
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
                        from: "TelusurHasilTest",
                        localField: "idTht",
                        foreignField: "_id",
                        as: "tht",
                      },
                    },
                    {
                      $lookup: {
                        from: "TelusurBendaUji",
                        localField: "idTbu",
                        foreignField: "_id",
                        as: "tbu",
                      },
                    },
                  ],
                }),
              },
            })
            .then((res) => res?.data?.result);
          if (result.length >= 1) {
            const telusur = result[0];
            const tht = telusur?.tht?.[0] || {};
            const tbu = telusur?.tbu?.[0] || {};
            this.data = telusur;
            this.detail = tht;
            this.tbu = tbu;
            this.dibuatOleh = tht?.dibuatOleh || {};
            this.items = tht?.items?.map((item, idx) => {
              return {
                ...item,
                txtHasilTest:
                  idx === 0 && tht?.hasilTest?.length >= 1
                    ? "Hasil Tes Terlampir"
                    : "",
                laboratoriumNama: tht?.laboratorium?.[idx]?.nama,
                laboratoriumAlamat: tht?.laboratorium?.[idx]?.alamat,
                saksiWaskitaNama: tht?.saksiWaskita?.[idx]?.nama,
                saksiWaskitaTtd: tht?.saksiWaskita?.[idx]?.ttd,
                saksiPemberiKerjaNama: tht?.saksiPemberiKerja?.[idx]?.nama,
                saksiPemberiKerjaTtd: tht?.saksiPemberiKerja?.[idx]?.ttd,
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
  #section {
    page-break-after: always;
  }
}
@page {
  size: landscape;
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
@page WordSection1 {
  size: 841.8pt 595.2pt;
  margin: 36pt 36pt 36pt 36pt;
}
div.WordSection1 {
  page: WordSection1;
}
</style>
