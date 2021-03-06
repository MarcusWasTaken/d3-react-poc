export default {
  gaps: {
    1: {
      id: 1,
      creationDate: '2018-08-19 12:15',
      owner: 'Tord Karlin',
      createdBy: '',
      changedBy: '',
      changeDate: '2018-08-23 13:45',
      revisitDate: '',
      dueDate: '2018-09-20',
      viewpoint: 'Strategy',
      title: 'Brighter',
      subTitle: '',
      description:
        'How can we improve pick & place? This is problematic because',
      quantification: {
        unit: 'time to print 1cm2x1mm sample',
        measurement:
          'measure time at print start and finish, calculate difference',
        worst: 'Several hours (Extrusion, LIFT, DLBP)',
        goal: '<10 minutes (BRIGHTER)',
        best: '30 minutes (Inkjet, SLT)',
        current: 'n/a'
      },
      value: {
        text:
          'The global transplantation market estimated to reach $51.0 bill...',
        value: 1000000
      },
      image: {
        caption: 'Skin structure and cell components.',
        fileName: 'brighter_gap_1.png'
      },
      links: [
        {
          displayName: 'Brighter EU Application Part B section 1-3',
          url: 'http://www.google.se'
        }
      ]
    },
    2: {
      id: 2,
      creationDate: '2018-09-19 12:15',
      owner: 'Lars Ivansen',
      createdBy: '',
      changedBy: '',
      changeDate: '2018-08-23 13:45',
      revisitDate: '',
      dueDate: '2019-09-20',
      viewpoint: 'Technology',
      title: 'Reinvent food delivary',
      subTitle: '',
      description: 'How can we deliver food faster',
      quantification: {
        unit: 'time to deliver a standard bag of food',
        measurement: 'measure time from order to deliver, calculate difference',
        worst: 'Several days',
        goal: '1 hour from order',
        best: '30 minutes',
        current: 'n/a'
      },
      value: {
        text: 'This has huge potential if done right',
        value: 20000000
      },
      links: [
        {
          displayName: 'Brighter EU Application Part B section 1-3',
          url: 'http://www.google.se'
        }
      ]
    },
    3: {
      id: 3,
      creationDate: '2018-08-31 02:04',
      owner: 'Nils Nilsson',
      createdBy: '',
      changedBy: '',
      changeDate: '2018-08-31 02:04:50',
      revisitDate: '',
      dueDate: '2019-04-18',
      viewpoint: 'Strategy',
      title: 'How can we eat more burgers faster',
      description: 'magnam',
      quantification: {
        unit: 'time to print 1cm2x1mm sample',
        measurement:
          'measure time at print start and finish, calculate difference',
        worst: 'Several hours (Extrusion, LIFT, DLBP)',
        goal: '<10 minutes (BRIGHTER)',
        best: '30 minutes (Inkjet, SLT)',
        current: 'n/a'
      },
      value: {
        text:
          'Two pattern modulated light-sheet sources placed at 90º will be combined spatially-confined energy doses (visible light, near λ = 405 nm) that will trigger local crosslinking in a sensitised hydrogel (exists today)',
        value: 750000
      },
      links: [
        {
          displayName: 'Cool link',
          url: 'https://www.google.se'
        }
      ]
    }
  },
  concepts: {
    3: {
      id: 3,
      creationDate: '2018-08-19 12:15',
      owner: 'Gustav Mårtensson',
      createdBy: '',
      changedBy: '',
      changeDate: '2018-08-23 14:45',
      revisitDate: '',
      dueDate: '2019-04-20',
      viewpoint: 'Business area',
      title: 'Brighter',
      subTitle: 'BIOPRINTING BY LIGHT-SHEET LITHOGRAPHY...',
      description: 'Two pattern modulated light-sheet sources...',
      complexity: {
        description: 'European project (if approved in Q4 2018) 9 MSEK to ...',
        value: 800000,
        disciplinces: [
          'Optics',
          'Electronics',
          'Mechanics',
          'Mechatronics',
          'SW',
          'Processing',
          'External partners'
        ]
      },
      image: {
        caption: 'Image caption',
        fileName: 'brighter_concept_1.png'
      },
      links: [
        {
          displayName: 'Brighter EU Application Part B section 1-3',
          url: 'http://www.google.se'
        },
        {
          displayName: '',
          url: 'http://www.google.se'
        }
      ]
    },
    6: {
      id: 6,
      creationDate: '2018-09-03 12:15',
      owner: 'Gustav Mårtensson',
      createdBy: '',
      changedBy: '',
      changeDate: '2018-09-03 14:45',
      revisitDate: '',
      dueDate: '2017-09-20',
      viewpoint: 'Strategy',
      title: 'Brighter2',
      subTitle: 'BIOPRINTING BY LIGHT-SHEET LITHOGRAPHY...',
      description: 'Two pattern modulated light-sheet sources...',
      complexity: {
        description: 'European project (if approved in Q4 2018) 9 MSEK to ...',
        value: 600000,
        disciplinces: [
          'Optics',
          'Electronics',
          'Mechanics',
          'Mechatronics',
          'SW',
          'Processing',
          'External partners'
        ]
      },
      image: {
        caption: 'Image caption',
        fileName: 'brighter_concept_1.png'
      },
      links: [
        {
          displayName: 'Brighter EU Application Part B section 1-3',
          url: 'http://www.google.se'
        },
        {
          displayName: '',
          url: 'http://www.google.se'
        }
      ]
    }
  },
  gapRelations: {
    4: {
      id: 4,
      creationDate: '2018-08-19 14:15',
      owner: 'Martin',
      createdBy: 'Dr gap',
      changedBy: 'Karolin',
      changeDate: '2018-08-30 14:45',
      revisitDate: '',
      toGap: 1,
      fromGap: 2,
      justification: 'assumption',
      links: [
        {
          displayName: 'Brighter EU Application Part B section 1-3',
          url: 'http://www.google.se'
        }
      ]
    }
  },
  gapConceptRelations: {
    5: {
      id: 5,
      creationDate: '2018-08-19 14:15',
      owner: 'Martin',
      createdBy: 'Dr gap',
      changedBy: 'Karolin',
      changeDate: '2018-08-30 14:45',
      revisitDate: '',
      gap: 1,
      concept: 3,
      trl: 3,
      difficulty: 6,
      questions: [
        'Do we have patent clearance vs other pattern generator companies?',
        'What Mycronic people for a first workshop (speculative before we know if EU project is approved)?',
        'What are the questions we need to answer?'
      ],
      links: [
        {
          displayName: 'Brighter EU Application Part B section 1-3',
          url: 'http://www.google.se'
        }
      ]
    },
    8: {
      id: 8,
      creationDate: '2018-10-19 14:15',
      owner: 'Martin',
      createdBy: 'Dr gap',
      changedBy: 'Karolin',
      changeDate: '2018-11-30 14:45',
      revisitDate: '',
      gap: 2,
      concept: 6,
      trl: 4,
      difficulty: 8,
      questions: ['What are the questions we need to answer?'],
      links: [
        {
          displayName: 'Brighter EU Application Part B section 4-6',
          url: 'http://www.google.se'
        }
      ]
    }
  }
}
