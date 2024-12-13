import { useAuth0 } from '@auth0/auth0-react'
import { TRANSLATION_KEYS } from '../../i18n/translationKeys'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Grid, List, ListItem, ListItemText, Paper, Typography } from '@mui/material'
import { ProjectsData } from '@/types/projects'
import { PROJECTSMOCK } from '../../MOCKDATA'

export default function Home() {
  const { t } = useTranslation()
  const { user } = useAuth0()

  return (
    <>
      <Paper elevation={0}>
        <List sx={{ padding: 1 }}>
          {PROJECTSMOCK.map((item: ProjectsData) => (
            <Paper sx={{ marginBottom: 1 }} elevation={16}>
              <ListItem alignItems="flex-start" key={item._id}>
                <ListItemText
                  sx={{ width: 'inherit' }}
                  primary={<Typography variant="body1">{item.projectName}</Typography>}
                  secondary={<Typography variant="body2">{item.projectAcronym}</Typography>}
                />
                <ListItemText>
                  <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    {Object.entries(item.projectTeam).map(([key, member]) => (
                      <Grid item xs={6} sm={4} md={3} key={key}>
                        <Paper sx={{ padding: 1 }}>
                          {member.roleName}: {member.memberName}
                        </Paper>
                      </Grid>
                    ))}
                  </Grid>
                </ListItemText>
              </ListItem>
            </Paper>
          ))}
        </List>
      </Paper>
    </>
  )
}
