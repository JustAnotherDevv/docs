module.exports = {
  home: [
    {
      type: 'category',
      label: 'Home',
      link: { type: 'doc', id: 'home/home' },
      items: ['home/about-helium', 'home/helium-history'],
    },
    {
      type: 'category',
      label: 'FAQ',
      link: { type: 'doc', id: 'home/faq/helium-network' },
      items: ['home/faq/security', 'home/faq/open-source', 'home/faq/docs-installation'],
      collapsed: true,
    },
  ],

  architecture: [
    {
      type: 'category',
      label: 'Solana',
      link: { type: 'doc', id: 'architecture/solana/solana' },
      items: [
        'architecture/solana/primer',
        'architecture/solana/rewardable-entities',
        'architecture/solana/compression-nfts',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Oracles',
      link: { type: 'doc', id: 'architecture/oracles/oracles' },
      items: [
        'architecture/oracles/data-transfer-oracles',
        'architecture/oracles/iot-proof-of-coverage-oracles',
        'architecture/oracles/mobile-proof-of-coverage-oracles',
        'architecture/oracles/oracle-data',
        'architecture/oracles/price-oracles',
        'architecture/oracles/rewards-oracles',
      ],
      collapsed: true,
    },
    'architecture/hotspot-api',
    {
      type: 'category',
      label: 'Hotspots',
      link: {
        type: 'doc',
        id: 'architecture/hotspot-makers/hotspot-makers',
      },
      items: [
        'architecture/hotspot-makers/mobile-cbrs/5g-hardware-specification',
        {
          type: 'category',
          label: 'Hotspot Makers',
          link: { type: 'doc', id: 'architecture/hotspot-makers/hotspot-makers' },
          items: [
            'architecture/hotspot-makers/mcc/compliance-committee',
            'architecture/hotspot-makers/mcc/maker-ethics',
            'architecture/hotspot-makers/become-a-maker/burn-hnt-to-maker-wallet',
            'architecture/hotspot-makers/become-a-maker/funding-a-maker-account',
          ],
          collapsed: true,
        },
        {
          type: 'category',
          label: 'Audit Process',
          link: { type: 'doc', id: 'architecture/hotspot-makers/mcc/hotspot-audit-process' },
          items: [
            'architecture/hotspot-makers/become-a-maker/maker-approval-auditing',
            'architecture/hotspot-makers/mcc/fcc-compliance',
            'architecture/hotspot-makers/mcc/ce-red-compliance',
            'architecture/hotspot-makers/become-a-maker/hotspot-integration-testing',
          ],
        },
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Solana Migration Guides',
      link: { type: 'doc', id: 'architecture/solana/migration-overview' },
      items: [
        'architecture/solana/migration-faq',
        'architecture/solana/migration/application-builder',
        'architecture/solana/migration/blockchain-api',
        'architecture/solana/migration/blockchain-etl',
        'architecture/solana/migration/blockchain-node',
        'architecture/solana/migration/console-operator',
        'architecture/solana/migration/exchange',
        'architecture/solana/migration/governance',
        'architecture/solana/migration/maker',
        'architecture/solana/migration/hotspot-operator',
        'architecture/solana/migration/maker-hotspot-software',
        'architecture/solana/migration/hst',
        'architecture/solana/migration/ledger',
        'architecture/solana/migration/network-user',
        'architecture/solana/migration/validator-operator',
        'architecture/solana/migration/wallet-user',
      ],
      collapsed: true,
    },
  ],

  tokens: [
    'tokens/hnt-token',
    'tokens/iot-token',
    'tokens/mobile-token',
    'tokens/data-credit',
    'tokens/sol-token',
  ],

  wallets: [
    'wallets/wallets',
    'wallets/helium-wallet-app',
    'wallets/third-party-wallets',
    'wallets/wallet-seed-phrase',
    'wallets/ledger-wallet',
    'wallets/cli-wallet',
  ],

  iot_network: [
    {
      type: 'category',
      label: 'The Helium IOT Network',
      link: { type: 'doc', id: 'network-iot/iot' },
      items: [],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Use Helium LoRaWAN',
      link: { type: 'doc', id: 'network-iot/lorawan-network-servers/lorawan-network-servers' },
      items: [
        'network-iot/lorawan-network-servers/find-a-lns-provider',
        {
          type: 'category',
          label: 'Run Your Own LNS',
          link: { type: 'doc', id: 'network-iot/run-an-lns/run-an-lns' },
          items: [
            'network-iot/run-an-lns/buy-an-oui',
            {
              type: 'category',
              label: 'Fund an Organizationally Unique Identifier',
              link: { type: 'doc', id: 'network-iot/run-an-lns/fund-an-oui' },
              items: [
                'tokens/data-credit-portal',
                'network-iot/run-an-lns/fund-an-oui-using-hnt',
              ]
            },
            'network-iot/run-an-lns/configure-chirpstack',
            'network-iot/run-an-lns/configure-routing-rules',
            'network-iot/run-an-lns/advanced-configuration',
            'network-iot/run-an-lns/common-issues',
            'network-iot/run-an-lns/chirpstack-add-device'
          ],
        },
        'network-iot/lorawan-roaming',
      ],
    },
    {
      type: 'category',
      label: 'LoRaWAN on Helium',
      link: { type: 'doc', id: 'network-iot/lorawan-on-helium' },
      items: [
        'network-iot/lorawan-frequency-plans',
        'network-iot/lorawan-region-plans',
      ],
    },
    {
      type: 'category',
      label: 'Devices',
      link: { type: 'doc', id: 'network-iot/devices/iot-devices' },
      items: [
        'network-iot/devices/ready-to-use/ready-to-use',
        'network-iot/devices/development/development',
      ],
    },
    {
      type: 'category',
      label: 'Hotspots',
      link: { type: 'doc', id: 'architecture/hotspot-makers/become-a-maker/basic-miner-operation' },
      items: [
        {
          type: 'category',
          label: 'IOT Hotspots',
          link: { type: 'doc', id: 'network-iot/hotspots-iot/iot-hotspots' },
          items: [
            'architecture/hotspot-makers/become-a-maker/docker-integration',
            'architecture/hotspot-makers/become-a-maker/hotspot-ble-services',
            'architecture/hotspot-makers/become-a-maker/hotspot-wifi-configuration',
            'architecture/hotspot-makers/become-a-maker/maker-app-requirements',
            'architecture/hotspot-makers/become-a-maker/security-requirements',
          ],
        },
        {
          type: 'category',
          label: 'Data-Only Hotspots',
          link: { type: 'doc', id: 'network-iot/hotspots-iot/data-only-hotspots' },
          items: [
            'network-iot/hotspots-iot/data-only-hotspots-onboarding',
            'network-iot/hotspots-iot/data-only/balena-data-only-hotspot',
            'network-iot/hotspots-iot/data-only/dragino-pg1301',
            'network-iot/hotspots-iot/data-only/dragino-data-only-hotspot',
            'network-iot/hotspots-iot/data-only/kerlink-data-only-hotspot',
            'network-iot/hotspots-iot/data-only/rak-concentrators',
          ],
        },
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Proof of Coverage',
      link: { type: 'doc', id: 'network-iot/iot-proof-of-coverage' },
      items: [
        'network-iot/iot-proof-of-coverage-roadmap',
        'network-iot/iot-denylist',
        {
          type: 'category',
          label: 'Coverage Mapping',
          link: { type: 'doc', id: 'network-iot/coverage-mapping/iot-coverage-mapping' },
          items: [
            'network-iot/coverage-mapping/iot-coverage-mapping-quickstart',
            'network-iot/coverage-mapping/iot-coverage-mapping-roadmap',
            'network-iot/coverage-mapping/iot-coverage-mapping-api',
          ],
        },
      ],
    },
  ],

  mobile_network: [
    {
      type: 'category',
      label: '5G on Helium',
      link: { type: 'doc', id: 'network-mobile/5g-on-helium' },
      items: [
        'network-mobile/cbrs-radios',
        'network-mobile/mobile-mappers',
        'network-mobile/mobile-proof-of-coverage',
        'network-mobile/mobile-service-providers',
      ],
      collapsed: true,
    },
  ],

  governance: [
    'governance/governance',
    'governance/voting',
    'governance/governance-faq',
    'governance/realms',
    'governance/vehnt',
    'governance/staking-with-realms',
    'governance/working-groups',
    'governance/committees',
    {
      type: 'category',
      label: 'Improvement Proposals',
      link: { type: 'doc', id: 'governance/hip' },
      items: ['home/faq/hip-list', 'home/faq/write-a-hip', 'home/faq/edit-a-hip'],
    },
  ],

  archive_blockchain: [
    {
      type: 'category',
      label: 'Blockchain',
      link: { type: 'doc', id: 'archive/blockchain/blockchain' },
      items: [
        'archive/blockchain/blockchain-primitives',
        'archive/blockchain/mining',
        'network-iot/iot-transaction-fees',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Mine IOT',
      link: { type: 'doc', id: 'tokens/mine-iot' },
      items: [
        'home/faq/build-on-network',
      ],
      collapsed: true,
    },
  ],

  iot_device_ready_to_use: [
    {
      type: 'link',
      label: '<- Devices',
      href: '/iot/devices',
    },
    'network-iot/devices/ready-to-use/ready-to-use',
    {
      type: 'category',
      label: 'Abeeway',
      items: [
        'network-iot/devices/ready-to-use/abeeway/abeeway-geolocation-module',
        'network-iot/devices/ready-to-use/abeeway/abeeway-industrial-tracker',
        'network-iot/devices/ready-to-use/abeeway/abeeway-compact-tracker',
        'network-iot/devices/ready-to-use/abeeway/abeeway-micro-tracker',
        'network-iot/devices/ready-to-use/abeeway/abeeway-smart-badge',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Adeunis',
      items: ['network-iot/devices/ready-to-use/adeunis/adeunis-field-test-device'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Acqua-Scope',
      items: [
        'network-iot/devices/ready-to-use/aquascope/bvs',
        'network-iot/devices/ready-to-use/aquascope/wwd',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Beiselen',
      items: ['network-iot/devices/ready-to-use/beiselen/radar'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'BoatOfficer',
      items: ['network-iot/devices/ready-to-use/boatofficer/boatofficerblue'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Bosch',
      items: ['network-iot/devices/ready-to-use/bosch/tps110'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Comtac',
      items: [
        'network-iot/devices/ready-to-use/comtac/lpn-td1',
        'network-iot/devices/ready-to-use/comtac/cluey-km',
        'network-iot/devices/ready-to-use/comtac/lpn-tsm',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Decent Lab',
      items: [
        'network-iot/devices/ready-to-use/decentlab/dl-iam',
        'network-iot/devices/ready-to-use/decentlab/dl-pr26',
        'network-iot/devices/ready-to-use/decentlab/dl-mbx',
        'network-iot/devices/ready-to-use/decentlab/dl-5tm',
        'network-iot/devices/ready-to-use/decentlab/dl-atm22',
        'network-iot/devices/ready-to-use/decentlab/dl-atm41',
        'network-iot/devices/ready-to-use/decentlab/dl-ctd10',
        'network-iot/devices/ready-to-use/decentlab/dl-dlr2-002',
        'network-iot/devices/ready-to-use/decentlab/dl-dlr2-003',
        'network-iot/devices/ready-to-use/decentlab/dl-dlr2-004',
        'network-iot/devices/ready-to-use/decentlab/dl-dlr2-005',
        'network-iot/devices/ready-to-use/decentlab/dl-dlr2-006',
        'network-iot/devices/ready-to-use/decentlab/dl-dlr2-008',
        'network-iot/devices/ready-to-use/decentlab/dl-dlr2-010',
        'network-iot/devices/ready-to-use/decentlab/dl-dlr2-012',
        'network-iot/devices/ready-to-use/decentlab/dl-ds18',
        'network-iot/devices/ready-to-use/decentlab/dl-dws',
        'network-iot/devices/ready-to-use/decentlab/dl-itst',
        'network-iot/devices/ready-to-use/decentlab/dl-kl66',
        'network-iot/devices/ready-to-use/decentlab/dl-lid',
        'network-iot/devices/ready-to-use/decentlab/dl-lp8p',
        'network-iot/devices/ready-to-use/decentlab/dl-optod',
        'network-iot/devices/ready-to-use/decentlab/dl-par',
        'network-iot/devices/ready-to-use/decentlab/dl-pm',
        'network-iot/devices/ready-to-use/decentlab/dl-pr21',
        'network-iot/devices/ready-to-use/decentlab/dl-pr36',
        'network-iot/devices/ready-to-use/decentlab/dl-pr36ctd',
        'network-iot/devices/ready-to-use/decentlab/dl-pyr',
        'network-iot/devices/ready-to-use/decentlab/dl-rhc',
        'network-iot/devices/ready-to-use/decentlab/dl-sht35-001',
        'network-iot/devices/ready-to-use/decentlab/dl-sht35-002',
        'network-iot/devices/ready-to-use/decentlab/dl-smtp',
        'network-iot/devices/ready-to-use/decentlab/dl-tbrg',
        'network-iot/devices/ready-to-use/decentlab/dl-trs11',
        'network-iot/devices/ready-to-use/decentlab/dl-trs12',
        'network-iot/devices/ready-to-use/decentlab/dl-trs21',
        'network-iot/devices/ready-to-use/decentlab/dl-wrm',
        'network-iot/devices/ready-to-use/decentlab/dl-zn1',
        'network-iot/devices/ready-to-use/decentlab/dl-zn2',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Develiot',
      items: [
        'network-iot/devices/ready-to-use/develiot/rwmr',
        'network-iot/devices/ready-to-use/develiot/uaqms',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Digtal Matter',
      items: [
        'network-iot/devices/ready-to-use/digital-matter/oyster',
        'network-iot/devices/ready-to-use/digital-matter/yabby-edge',
        'network-iot/devices/ready-to-use/digital-matter/digital-matter-lorawan-gps',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Dragino',
      items: [
        'network-iot/devices/ready-to-use/dragino/rs485-ln',
        'network-iot/devices/ready-to-use/dragino/rs485-bl',
        'network-iot/devices/ready-to-use/dragino/lsn50v2-s31',
        'network-iot/devices/ready-to-use/dragino/lsn50v2-d20',
        'network-iot/devices/ready-to-use/dragino/ldds20',
        'network-iot/devices/ready-to-use/dragino/ldds75',
        'network-iot/devices/ready-to-use/dragino/lbt1',
        'network-iot/devices/ready-to-use/dragino/lse01',
        'network-iot/devices/ready-to-use/dragino/lwl01',
        'network-iot/devices/ready-to-use/dragino/lds01',
        'network-iot/devices/ready-to-use/dragino/lds02',
        'network-iot/devices/ready-to-use/dragino/lgt92',
        'network-iot/devices/ready-to-use/dragino/lt22222-l',
        'network-iot/devices/ready-to-use/dragino/lt33222-l',
        'network-iot/devices/ready-to-use/dragino/lht65',
        'network-iot/devices/ready-to-use/dragino/lsn50-v2',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'IMST',
      items: [
        'network-iot/devices/ready-to-use/imst/range-extender',
        'network-iot/devices/ready-to-use/imst/ioke868',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'IoTsens',
      items: [
        'network-iot/devices/ready-to-use/iotsens/sound-device',
        'network-iot/devices/ready-to-use/iotsens/airquality-device',
        'network-iot/devices/ready-to-use/iotsens/lidar-device',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'izinto',
      items: ['network-iot/devices/ready-to-use/izinto/izi-io-4840'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Laird',
      items: [
        'network-iot/devices/ready-to-use/laird/rs1xx-temp-rh-sensor',
        'network-iot/devices/ready-to-use/laird/rs1xx-ext-temp-1w-sensor',
        'network-iot/devices/ready-to-use/laird/rs1xx-ext-multi-sensor',
        'network-iot/devices/ready-to-use/laird/rs1xx-ext-temp-rtd-sensor',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'mcf88',
      items: [
        'network-iot/devices/ready-to-use/mcf88/mcf-lw06davk',
        'network-iot/devices/ready-to-use/mcf88/mcf-lw06davpk',
        'network-iot/devices/ready-to-use/mcf88/mcf-lw12co2',
        'network-iot/devices/ready-to-use/mcf88/mcf-lw12met',
        'network-iot/devices/ready-to-use/mcf88/mcf-lw12plg',
        'network-iot/devices/ready-to-use/mcf88/mcf-lw12ter',
        'network-iot/devices/ready-to-use/mcf88/mcf-lw12terwp',
        'network-iot/devices/ready-to-use/mcf88/mcf-lw12terpm',
        'network-iot/devices/ready-to-use/mcf88/mcf-lw12voc',
        'network-iot/devices/ready-to-use/mcf88/mcf-lw13io',
        'network-iot/devices/ready-to-use/mcf88/mcf-lw13mio',
        'network-iot/devices/ready-to-use/mcf88/mcf-lwws00',
        'network-iot/devices/ready-to-use/mcf88/mcf-lwws01',
        'network-iot/devices/ready-to-use/mcf88/mcf-lwws02',
        'network-iot/devices/ready-to-use/mcf88/mcf-lwws03',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'MClimate',
      items: [
        'network-iot/devices/ready-to-use/mclimate/vicki',
        'network-iot/devices/ready-to-use/mclimate/t-valve',
        'network-iot/devices/ready-to-use/mclimate/flood-sensor',
        'network-iot/devices/ready-to-use/mclimate/ht-sensor',
        'network-iot/devices/ready-to-use/mclimate/aqi-sensor',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Milesight',
      items: [
        'network-iot/devices/ready-to-use/milesight-iot/am107',
        'network-iot/devices/ready-to-use/milesight-iot/em300-th',
        'network-iot/devices/ready-to-use/milesight-iot/em500-co2',
        'network-iot/devices/ready-to-use/milesight-iot/em500-udl',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Moko',
      items: [
        'network-iot/devices/ready-to-use/moko/lw001-bg',
        'network-iot/devices/ready-to-use/moko/lw003-b',
        'network-iot/devices/ready-to-use/moko/lw004',
        'network-iot/devices/ready-to-use/moko/lw005-mp',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Netvox',
      items: [
        'network-iot/devices/ready-to-use/netvox/r311a',
        'network-iot/devices/ready-to-use/netvox/r311b',
        'network-iot/devices/ready-to-use/netvox/r311g',
        'network-iot/devices/ready-to-use/netvox/r311w',
        'network-iot/devices/ready-to-use/netvox/r312',
        'network-iot/devices/ready-to-use/netvox/r312a',
        'network-iot/devices/ready-to-use/netvox/r711',
        'network-iot/devices/ready-to-use/netvox/r718a',
        'network-iot/devices/ready-to-use/netvox/r718ab',
        'network-iot/devices/ready-to-use/netvox/r718b',
        'network-iot/devices/ready-to-use/netvox/r718ck',
        'network-iot/devices/ready-to-use/netvox/r718ct',
        'network-iot/devices/ready-to-use/netvox/r718e',
        'network-iot/devices/ready-to-use/netvox/r718f',
        'network-iot/devices/ready-to-use/netvox/r718n1',
        'network-iot/devices/ready-to-use/netvox/r718n3',
        'network-iot/devices/ready-to-use/netvox/r718t',
        'network-iot/devices/ready-to-use/netvox/r720a',
        'network-iot/devices/ready-to-use/netvox/r72615',
        'network-iot/devices/ready-to-use/netvox/r72615a',
        'network-iot/devices/ready-to-use/netvox/ra0715',
        'network-iot/devices/ready-to-use/netvox/ra0715y',
        'network-iot/devices/ready-to-use/netvox/rb02i',
        'network-iot/devices/ready-to-use/netvox/rb11e',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Nwave',
      items: ['network-iot/devices/ready-to-use/nwave/nps310sm'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Origo',
      items: [
        'network-iot/devices/ready-to-use/origo/lorawan-watch',
        'network-iot/devices/ready-to-use/origo/smart-badges',
      ],

      collapsed: true,
    },
    {
      type: 'category',
      label: 'RAKwireless',
      items: [
        'network-iot/devices/ready-to-use/rakwireless/rak2171',
        'network-iot/devices/ready-to-use/rakwireless/rak7200',
        'network-iot/devices/ready-to-use/rakwireless/rak7201',
        'network-iot/devices/ready-to-use/rakwireless/rak7204',
        'network-iot/devices/ready-to-use/rakwireless/rak7431',
        'network-iot/devices/ready-to-use/rakwireless/rak10700',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Seeed Studio',
      items: [
        'network-iot/devices/ready-to-use/seeed-studio/sensecap-s2100-data-logger',
        'network-iot/devices/ready-to-use/seeed-studio/sensecap-s2101-tem-humid',
        'network-iot/devices/ready-to-use/seeed-studio/sensecap-s2102-light',
        'network-iot/devices/ready-to-use/seeed-studio/sensecap-s2103-co2-tem-humid',
        'network-iot/devices/ready-to-use/seeed-studio/sensecap-s2104-soil-mois-tem',
        'network-iot/devices/ready-to-use/seeed-studio/sensecap-s2105-soil-mois-tem-ec',
        'network-iot/devices/ready-to-use/seeed-studio/sensecap-soil-th',
        'network-iot/devices/ready-to-use/seeed-studio/sensecap-air-th',
        'network-iot/devices/ready-to-use/seeed-studio/sensecap-light',
        'network-iot/devices/ready-to-use/seeed-studio/sensecap-co2',
        'network-iot/devices/ready-to-use/seeed-studio/sensecap-pressure',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Sensedge',
      items: [
        'network-iot/devices/ready-to-use/sensedge/senstick-pro',
        'network-iot/devices/ready-to-use/sensedge/senstick-pure',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Tektelic',
      items: [
        'network-iot/devices/ready-to-use/tektelic/t000489x-smart-room-base',
        'network-iot/devices/ready-to-use/tektelic/t00048xx-smart-room-pir',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Tekzitel',
      items: ['network-iot/devices/ready-to-use/tekzitel/tekzipark'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'The Things Products',
      items: [
        'network-iot/devices/ready-to-use/the-things-products/the-things-node',
        'network-iot/devices/ready-to-use/the-things-products/the-things-uno',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Victor',
      items: ['network-iot/devices/ready-to-use/victor/victor-trap-v4xx'],
      collapsed: true,
    },
  ],

  iot_device_development: [
    {
      type: 'link',
      label: '<- Devices',
      href: '/iot/devices',
    },
    'network-iot/devices/development/development',
    {
      type: 'category',
      label: 'Adafruit',
      items: [
        'network-iot/devices/development/adafruit/adafruit-feather-m0-rfm95/adafruit-feather-m0-rfm95',
        'network-iot/devices/development/adafruit/adafruit-feather-m0-rfm95/arduino',
        'network-iot/devices/development/adafruit/adafruit-feather-m0-rfm95/adafruitio',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Arduino',
      items: [
        'network-iot/devices/development/arduino/mkr-wan-1310',
        {
          type: 'category',
          label: 'Portenta Vision Shield',
          link: {
            type: 'doc',
            id: 'network-iot/devices/development/arduino/lora-vision-shield/lora-vision-shield',
          },
          items: ['network-iot/devices/development/arduino/lora-vision-shield/arduino'],
          collapsed: true,
        },
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Embit',
      items: [
        'network-iot/devices/development/embit/emb-lr1280s',
        'network-iot/devices/development/embit/emb-lrwl55',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Heltec',
      items: [
        'network-iot/devices/development/heltec/cubecell-gps-6502',
        {
          type: 'category',
          label: 'HTCC-AB01',
          link: {
            type: 'doc',
            id: 'network-iot/devices/development/heltec/cubecell-dev-board/cubecell-dev-board',
          },
          items: [
            'network-iot/devices/development/heltec/cubecell-dev-board/arduino',
            'network-iot/devices/development/heltec/cubecell-dev-board/platformio',
          ],
          collapsed: true,
        },
        'network-iot/devices/development/heltec/cubecell-dev-board-plus',
        'network-iot/devices/development/heltec/cubecell-1-2-aa-node',
        'network-iot/devices/development/heltec/cubecell-capsule-sensor',
        'network-iot/devices/development/heltec/cubecell-solar-sensor',
        'network-iot/devices/development/heltec/cubecell-module',
        'network-iot/devices/development/heltec/cubecell-module-plus',
        {
          type: 'category',
          label: 'Wifi Lora 32 V2',
          link: {
            type: 'doc',
            id: 'network-iot/devices/development/heltec/wifi-lora-32-v2/wifi-lora-32-v2',
          },
          items: ['network-iot/devices/development/heltec/wifi-lora-32-v2/arduino'],
          collapsed: true,
        },
        'network-iot/devices/development/heltec/wireless-stick',
        'network-iot/devices/development/heltec/wireless-stick-lite',
        'network-iot/devices/development/heltec/wireless-shell',
        'network-iot/devices/development/heltec/lora-kit-151',
        'network-iot/devices/development/heltec/lora-node-151',
        'network-iot/devices/development/heltec/turtle-board',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'MCCI',
      items: [
        'network-iot/devices/development/mcci/catena4430',
        'network-iot/devices/development/mcci/catena4450',
        'network-iot/devices/development/mcci/catena4460',
        'network-iot/devices/development/mcci/catena4470',
        'network-iot/devices/development/mcci/catena4610',
        'network-iot/devices/development/mcci/catena4612',
        'network-iot/devices/development/mcci/catena4618',
        'network-iot/devices/development/mcci/catena4618m201',
        'network-iot/devices/development/mcci/catena4801',
        'network-iot/devices/development/mcci/catena4802',
        'network-iot/devices/development/mcci/model4811',
        'network-iot/devices/development/mcci/model4821',
        'network-iot/devices/development/mcci/model4822',
        'network-iot/devices/development/mcci/model4823',
        'network-iot/devices/development/mcci/model4831',
        'network-iot/devices/development/mcci/model4832',
        'network-iot/devices/development/mcci/model4841',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Midatronics',
      items: [
        'network-iot/devices/development/midatronics/windy-module',
        'network-iot/devices/development/midatronics/windy-mkr',
        'network-iot/devices/development/midatronics/sharky-module',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Multi-Tech',
      items: ['network-iot/devices/development/multi-tech/multi-tech-xdot'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'OpenSource Initiative',
      items: ['network-iot/devices/development/opensourceinitiative/paxcounter'],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'RAKwireless',
      items: [
        {
          type: 'category',
          label: 'Wisblock Starter Kit Rak4631',
          link: {
            type: 'doc',
            id: 'network-iot/devices/development/rakwireless/wisblock-4631/wisblock-4631',
          },
          items: [
            'network-iot/devices/development/rakwireless/wisblock-4631/arduino',
            'network-iot/devices/development/rakwireless/wisblock-4631/platformio',
          ],
          collapsed: true,
        },
        'network-iot/devices/development/rakwireless/rak7431',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'Seeed Studio',
      items: [
        'network-iot/devices/development/seeed-studio/loramodule-e5',
        'network-iot/devices/development/seeed-studio/loramodule-e5-devkit',
        'network-iot/devices/development/seeed-studio/loramodule-e5-mini',
        'network-iot/devices/development/seeed-studio/loramodule-e5-grove',
        'network-iot/devices/development/seeed-studio/seeed-studio-lorawan-dev-kit',
      ],

      collapsed: true,
    },
    {
      type: 'category',
      label: 'Sparkfun',
      items: [
        'network-iot/devices/development/sparkfun/pro-rf/pro-rf',
        'network-iot/devices/development/sparkfun/pro-rf/arduino',
      ],
      collapsed: true,
    },
    {
      type: 'category',
      label: 'STMicroelectronics',
      items: [
        {
          type: 'category',
          label: 'ST B-L072Z-LRWAN1',
          link: {
            type: 'doc',
            id: 'network-iot/devices/development/stmicroelectronics/st-b-l072z-lrwan1/st-b-l072z-lrwan1',
          },
          items: [
            'network-iot/devices/development/stmicroelectronics/st-b-l072z-lrwan1/arduino',
            'network-iot/devices/development/stmicroelectronics/st-b-l072z-lrwan1/platformio',
          ],
          collapsed: true,
        },
        'network-iot/devices/development/stmicroelectronics/nucleo-wl55jc1',
        'network-iot/devices/development/stmicroelectronics/nucleo-wl55jc2',
      ],
      collapsed: true,
    },
  ],

  // migration: [
  //   {
  //     type: 'category',
  //     label: 'Solana Migration Overview',
  //     link: { type: 'doc', id: 'architecture/solana/migration-overview' },
  //     items: [],
  //     collapsed: true,
  //   },
  //   'architecture/solana/migration-faq',
  //   'architecture/solana/migration/hotspot-operator',
  //   'architecture/solana/migration/validator-operator',
  //   {
  //     type: 'category',
  //     label: 'Hotspot Maker',
  //     items: [
  //       'architecture/solana/migration/maker',
  //       'architecture/solana/migration/maker-hotspot-software',
  //     ],
  //   },
  //   'architecture/solana/migration/exchange',
  //   'architecture/solana/migration/network-user',
  //   'architecture/solana/migration/console-operator',
  //   'architecture/solana/migration/application-builder',
  //   'architecture/solana/migration/governance',
  //   'architecture/solana/migration/blockchain-node',
  //   'architecture/solana/migration/blockchain-api',
  //   'architecture/solana/migration/blockchain-etl',
  //   'architecture/solana/migration/wallet-user',
  //   'architecture/solana/migration/ledger',
  //   'architecture/solana/migration/hst',
  // ],

  console: [
    {
      type: 'category',
      label: 'Helium Console',
      link: { type: 'doc', id: 'archive/console/console' },
      items: [
        'archive/console/quickstart',
        'archive/console/troubleshooting',
        'archive/console/marketplace',
      ],
    },
    'archive/console/my-account',
    'archive/console/adding-devices',
    'archive/console/alerts',
    'archive/console/api',
    'archive/console/cli',
    'archive/console/profiles',
    'archive/console/coverage',
    'archive/console/debug',
    {
      type: 'category',
      label: 'Flows',
      link: { type: 'doc', id: 'archive/console/flows/flows' },
      items: [
        'archive/console/flows/actions',
        'archive/console/flows/flows-faq',
        'archive/console/flows/orientation',
      ],
    },
    'archive/console/functions',
    {
      type: 'category',
      label: 'Integrations',
      link: { type: 'doc', id: 'archive/console/integrations/integrations' },
      items: [
        'archive/console/integrations/adafruitio',
        'archive/console/integrations/akenza',
        'archive/console/integrations/aws-iot-core',
        'archive/console/integrations/azure',
        'archive/console/integrations/cargo',
        'archive/console/integrations/datacake',
        'archive/console/integrations/google-sheets',
        'archive/console/integrations/http',
        'archive/console/integrations/json-schema',
        'archive/console/integrations/microshare',
        'archive/console/integrations/mqtt',
        'archive/console/integrations/mydevices-cayenne',
        'archive/console/integrations/tago',
        'archive/console/integrations/ubidots',
      ],
    },
    'archive/console/labels',
    {
      type: 'category',
      label: 'Migrating Devices',
      link: { type: 'doc', id: 'archive/console/migrating-devices/migrating-devices' },
      items: [
        'archive/console/migrating-devices/ttn-import',
        'archive/console/migrating-devices/ttn-manual',
      ],
    },

    'archive/console/multi-packets',
    'archive/console/users',
  ],
}
