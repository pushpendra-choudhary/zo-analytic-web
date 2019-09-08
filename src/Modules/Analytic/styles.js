const style = {
  container: {
    padding: 15,
    marginBottom: 50,
  },
  chartConatiner: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chartHeading: {
    fontWeight: 'bold',
  },
  chartDescription: {},
  separator: {
    height: '100%',
    width: '1px',
    backgroundColor: '#aaa',
    marginHorizontal: '15px'
  },

  //header
  header: {
    display: 'flex',
    height: '50px',
    backgroundColor: '#0d4d92',
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingRight: '25px',
  },
  logout: {
    color: 'white',
  },

  // char styles
  progressContainter: {
    display: 'flex',
    flex: 1,
    height: '25px',
    flexDirection: 'row',
    marginVertical: '25px',
    marginTop: '100px'
  },
  yesProgress: { backgroundColor: '#1eb53a'},
  noProgress: {  backgroundColor: '#0d4d92'},
  yesText: {color: '#1eb53a'},
  noText: {color: '#0d4d92'},
}

export default style;
