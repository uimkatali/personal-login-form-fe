import React, { ChangeEvent, useState } from 'react'
import { TextField, Button, Typography, Grid, Paper, useTheme } from '@mui/material'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/redux/store/store'
import { postProject } from '../../redux/reducers/projectReducers/projectSlice'
import { Team, TeamMemberDetails } from '@/types/projects'
import { useTranslation } from 'react-i18next'
import { TRANSLATION_KEYS } from '../../i18n/translationKeys'

const CreateProjectForm: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { t } = useTranslation()
  const theme = useTheme()

  const [projectName, setProjectName] = useState('')
  const [projectAcronym, setProjectAcronym] = useState('')
  const [projectTeam, setProjectTeam] = useState<Team>({
    projectSponsor: { roleName: '', memberName: '' },
    projectManager: { roleName: '', memberName: '' },
    technicalEngineer: { roleName: '', memberName: '' },
    electricalEngineer: { roleName: '', memberName: '' },
    mechanicalTechnicial: { roleName: '', memberName: '' },
    startUpTTandTLeader: { roleName: '', memberName: '' },
    snoLeader: { roleName: '', memberName: '' },
    imPillarCoach: { roleName: '', memberName: '' },
    costEngineer: { roleName: '', memberName: '' },
    pkPlatformPCISDirector: { roleName: '', memberName: '' },
    qaLeader: { roleName: '', memberName: '' },
    itotLeader: { roleName: '', memberName: '' },
  })

  const handleTeamInput = (
    event: ChangeEvent<HTMLInputElement>,
    key: keyof Team,
    field: keyof TeamMemberDetails
  ) => {
    const { value } = event.target

    setProjectTeam(prevData => ({
      ...prevData,
      [key]: { ...prevData[key], [field]: value },
    }))
  }

  const handleSubmit = () => {
    const projectData = {
      projectName,
      projectAcronym,
      projectTeam,
    }
    dispatch(postProject(projectData))
  }

  return (
    <Paper elevation={0} style={{ padding: '20px', margin: '20px' }}>
      <Typography sx={{ m: 1, color: theme.palette.secondary.main }} variant="h4">
        {t(TRANSLATION_KEYS.CREATE_A_PROJECT).toLocaleUpperCase()}
      </Typography>

      <Paper elevation={0} sx={{ m: 2 }}>
        <Typography sx={{ m: 1, color: theme.palette.secondary.main }} variant="h6">
          {t(TRANSLATION_KEYS.PROJECT_NAME).toLocaleUpperCase()}
        </Typography>
        <TextField
          fullWidth
          label="Project Name"
          value={projectName ? projectName : ''}
          onChange={e => setProjectName(e.target.value)}
        />

        <Typography sx={{ m: 1, color: theme.palette.secondary.main }} variant="h6">
          {t(TRANSLATION_KEYS.PROJECT_ACRONYM).toLocaleUpperCase()}
        </Typography>
        <TextField
          fullWidth
          label="Acronym"
          value={projectAcronym ? projectAcronym : ''}
          onChange={e => setProjectAcronym(e.target.value)}
        />
      </Paper>

      {Object.keys(projectTeam).map(key => (
        <Grid sx={{ m: 1 }} item xs={12}>
          <Typography sx={{ color: theme.palette.secondary.main }} variant="h6" key={key}>
            {t(`${TRANSLATION_KEYS[key as keyof typeof TRANSLATION_KEYS]}`).toLocaleUpperCase()}
          </Typography>
          <Paper
            elevation={0}
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignContent: 'space-between',
            }}
          >
            <TextField
              sx={{ m: 1 }}
              fullWidth
              label={
                projectTeam[key as keyof Team].roleName
                  ? projectTeam[key as keyof Team].roleName
                  : 'Role Name'
              }
              variant="outlined"
              value={projectTeam[key as keyof Team].roleName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleTeamInput(e, key as keyof Team, 'roleName')
              }
            />
            <TextField
              sx={{ m: 1 }}
              fullWidth
              label={
                projectTeam[key as keyof Team].memberName
                  ? projectTeam[key as keyof Team].memberName
                  : 'Member Name'
              }
              variant="outlined"
              value={projectTeam[key as keyof Team].memberName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                handleTeamInput(e, key as keyof Team, 'memberName')
              }
            />
          </Paper>
        </Grid>
      ))}
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'row-reverse',
        }}
      >
        <Button
          variant="text"
          sx={{
            fontSize: 16,
            color: theme.palette.secondary.main,
          }}
          onClick={() => {
            handleSubmit()
          }}
        >
          {t(TRANSLATION_KEYS.SUBMIT).toLocaleUpperCase()}
        </Button>
      </Paper>
    </Paper>
  )
}

export default CreateProjectForm
